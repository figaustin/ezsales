package com.ezsales.util;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileDownloadUtil {
    private Path foundFile;

    public Resource getFileAsResource() throws IOException {
        Path dirPath = Paths.get("D:/MyStuff/Coding Projects/ezsales/EZSales/src/main/resources/files");

        Files.list(dirPath).forEach(file -> {
            if (file.getFileName().toString().startsWith("invoice")) {
                foundFile = file;
                return;
            }
        });

        if (foundFile != null) {
            return new UrlResource(foundFile.toUri());
        }

        return null;
    }
}
