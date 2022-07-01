package com.ezsales.controllers;

import com.ezsales.models.Invoice;
import com.ezsales.models.Product;
import com.ezsales.services.InvoiceService;
import com.ezsales.util.FileDownloadUtil;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/invoices")
public class InvoiceController {

    private final InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @PostMapping("/receipt")
    public void create(@RequestBody ArrayList<String> products) throws IOException {
        String DEST = "D:/MyStuff/Coding Projects/ezsales/EZSales/src/main/webapp/WEB-INF/downloads/pdf/invoice.pdf";
        PdfDocument pdfDocument = new PdfDocument(new PdfWriter(DEST));
        Document document = new Document(pdfDocument);
        String title = "EZSales Invoice";
        String items = "Items: ";
        document.add(new Paragraph(title));
        document.add(new Paragraph(items));
        document.add(new Paragraph(products.toString()));
        document.close();

        System.out.println("Created pdf");
    }

    @GetMapping("/download/{fileName}")
    public void downloadPDFResource( HttpServletRequest request,
                                     HttpServletResponse response,
                                     @PathVariable("fileName") String fileName) {

        String dataDirectory = request.getServletContext().getRealPath("/WEB-INF/downloads/pdf/");
        Path file = Paths.get(dataDirectory, fileName);
        if (Files.exists(file)) {
            response.setContentType("application/pdf");
            response.addHeader("Content-Disposition", "attachment; filename=" + fileName);
            try {
                Files.copy(file, response.getOutputStream());
                response.getOutputStream().flush();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }
}


