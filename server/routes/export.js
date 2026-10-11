import express from "express";
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";
import { execSync } from "child_process";

import { cleanExports } from "../../src/utils/cleanExports.js";
import { saveBase64Image } from "../../src/utils/saveBase64Image.js";

const router = express.Router();

router.post("/export", async (req, res) => {
  try {
    const business = req.body;

    console.log("=================================");
    console.log("🚀 Iniciando exportação");
    console.log(
      "📦 Campos recebidos:",
      Object.keys(business || {})
    );
    console.log("=================================");

    if (!business) {
      return res.status(400).json({
        success: false,
        message: "Nenhum dado recebido.",
      });
    }

    //
    // Limpa exports anteriores
    //
    cleanExports();

    const exportsDir = path.resolve(
      process.cwd(),
      "exports"
    );

    const assetsDir = path.join(
      exportsDir,
      "assets"
    );

    fs.mkdirSync(exportsDir, {
      recursive: true,
    });

    fs.mkdirSync(assetsDir, {
      recursive: true,
    });

    //
    // Clona o objeto sem alterar o original
    //
    const businessToExport =
      structuredClone(business);

    // Marca como exportado
    businessToExport.exported = true;
    //
    // LOGO
    //
    if (businessToExport.logo) {
      const fileName = saveBase64Image(
        businessToExport.logo,
        path.join(assetsDir, "logo")
      );

      if (fileName) {
        businessToExport.logo =
          `assets/${fileName}`;
      }
    }

    //
    // PRODUTOS
    //
    if (Array.isArray(businessToExport.products)) {
      businessToExport.products.forEach(
        (product, index) => {
          if (!product?.image) return;

          const fileName =
            saveBase64Image(
              product.image,
              path.join(
                assetsDir,
                `product-${index + 1}`
              )
            );

          if (fileName) {
            product.image =
              `assets/${fileName}`;
          }
        }
      );
    }

    //
    // DIFERENCIAIS
    //
    if (
      Array.isArray(
        businessToExport.aboutFeatures
      )
    ) {
      businessToExport.aboutFeatures.forEach(
        (feature, index) => {
          if (!feature?.image) return;

          const fileName =
            saveBase64Image(
              feature.image,
              path.join(
                assetsDir,
                `feature-${index + 1}`
              )
            );

          if (fileName) {
            feature.image =
              `assets/${fileName}`;
          }
        }
      );
    }

    //
    // GALERIA
    //
    const galleryFiles = [];

    if (
      Array.isArray(
        businessToExport.gallery
      )
    ) {
      businessToExport.gallery.forEach(
        (image, index) => {
          const fileName =
            saveBase64Image(
              image,
              path.join(
                assetsDir,
                `gallery-${index + 1}`
              )
            );

          if (fileName) {
            galleryFiles.push(
              `assets/${fileName}`
            );
          }
        }
      );
    }

    businessToExport.gallery =
      galleryFiles;

    //
    // Gera business.json
    //
    const businessFile = path.resolve(
      process.cwd(),
      "src",
      "data",
      "business.json"
    );

    fs.mkdirSync(
      path.dirname(businessFile),
      {
        recursive: true,
      }
    );

    fs.writeFileSync(
      businessFile,
      JSON.stringify(
        businessToExport,
        null,
        2
      ),
      "utf8"
    );

    console.log(
      "✅ business.json atualizado"
    );

    //
    // Limpa build anterior
    //
    const distPath = path.resolve(
      process.cwd(),
      "dist"
    );

    if (fs.existsSync(distPath)) {
      fs.rmSync(distPath, {
        recursive: true,
        force: true,
      });
    }

    //
    // Executa build
    //
    console.log(
      "🚀 Executando npm run build..."
    );

    execSync("npm run build", {
      stdio: "inherit",
    });

    if (!fs.existsSync(distPath)) {
      throw new Error(
        "A pasta dist não foi criada."
      );
    }

    //
    // Nome do ZIP
    //
    const filename =
      (
        businessToExport.name ||
        "landing-page"
      )
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-") +
      ".zip";

    const zipPath = path.join(
      exportsDir,
      filename
    );

    //
    // Cria ZIP
    //
    const zip = new AdmZip();

    console.log(
      "📦 Adicionando build ao ZIP..."
    );

    zip.addLocalFolder(distPath);

    console.log(
      "🖼️ Adicionando imagens ao ZIP..."
    );

    zip.addLocalFolder(
      assetsDir,
      "assets"
    );

    console.log(
      "📄 Adicionando business.json..."
    );

    zip.addLocalFile(businessFile);

    zip.writeZip(zipPath);

    console.log(
      `✅ ZIP criado: ${zipPath}`
    );

    const result = {
      success: true,
      filename,
      downloadUrl:
        `/api/download/${filename}`,
    };

    console.log(
      "✅ Resposta enviada:",
      result
    );

    return res.json(result);
  } catch (error) {
    console.error(
      "❌ Erro ao exportar:"
    );

    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Erro ao exportar landing page.",
      error: error.message,
    });
  }
});

router.get(
  "/download/:filename",
  (req, res) => {
    try {
      const filePath = path.resolve(
        process.cwd(),
        "exports",
        req.params.filename
      );

      console.log(
        "⬇️ Download solicitado:",
        filePath
      );

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({
          success: false,
          message:
            "Arquivo não encontrado.",
        });
      }

      return res.download(
        filePath,
        req.params.filename
      );
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Erro ao baixar arquivo.",
      });
    }
  }
);

export default router;
