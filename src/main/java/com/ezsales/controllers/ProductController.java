package com.ezsales.controllers;

import com.ezsales.models.Product;
import com.ezsales.services.BusinessService;
import com.ezsales.services.ProductService;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;
    private final BusinessService businessService;

    public ProductController(ProductService productService, BusinessService businessService) {
        this.productService = productService;
        this.businessService = businessService;
    }


    @PostMapping("/add/{id}")
    public void create(@PathVariable("id") Long id, @RequestBody Product product) {
        product.setBusiness(businessService.findById(id));
        productService.create(product);
    }

    @PostMapping("/receipt")
    public Document receipt(@RequestBody Product[] products) throws DocumentException, FileNotFoundException {
        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream("iTextHelloWOrld.pdf"));

        document.open();
        Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
        Chunk chunk = new Chunk("Hello World", font);

        document.add(chunk);
        document.close();
        return document;
    }
}
