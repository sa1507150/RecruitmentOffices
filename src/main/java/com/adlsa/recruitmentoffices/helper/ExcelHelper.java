package com.adlsa.recruitmentoffices.helper;

import com.adlsa.recruitmentoffices.entity.Record;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ExcelHelper {
    public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    static String[] HEADERs = { "SerialNo", "WorkerName", "Passport", "VisaNo", "SponsorName", "ArrivalDate", "Remark" };
    static String SHEET = "Records";
    public static boolean hasExcelFormat(MultipartFile file) {

        if (!TYPE.equals(file.getContentType())) {
            return false;
        }

        return true;
    }

    public static List<Record> excelToRecords(InputStream is) {
        try {
            Workbook workbook = new XSSFWorkbook(is);

            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rows = sheet.iterator();

            List<Record> records = new ArrayList<>();

            int rowNumber = 0;
            while (rows.hasNext()) {
                Row currentRow = rows.next();

                // skip header
                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }

                Iterator<Cell> cellsInRow = currentRow.iterator();

                Record record = new Record();

                int cellIdx = 0;
                while (cellsInRow.hasNext()) {
                    Cell currentCell = cellsInRow.next();

                    switch (cellIdx) {
                        case 0:
                            record.setSerialNo(Integer.parseInt(new DataFormatter().formatCellValue(currentCell)));
                            break;
                        case 1:
                            record.setWorkerName(new DataFormatter().formatCellValue(currentCell));
                            break;
                        case 2:
                            record.setPassport(new DataFormatter().formatCellValue(currentCell));
                            break;
                        case 3:
                            record.setVisaNo(new DataFormatter().formatCellValue(currentCell));
                            break;
                        case 4:
                            record.setSponsorName(new DataFormatter().formatCellValue(currentCell));
                            break;
                        case 5:
                            record.setArrivalDate(new DataFormatter().formatCellValue(currentCell));
                            break;
                        case 6:
                            record.setRemark(new DataFormatter().formatCellValue(currentCell));
                            break;
                        default:
                            break;
                    }

                    cellIdx++;
                }
                records.add(record);
            }

            workbook.close();

            return records;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }
    }
}
