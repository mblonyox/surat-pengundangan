import {
  AlignmentType,
  BorderStyle,
  convertMillimetersToTwip,
  Document,
  Header,
  HeightRule,
  ImageRun,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";

import logo from "../assets/logo_b64.txt?raw";

//#region createSurat
export const createPengantar = (context: {
  nomor: string;
  tanggal: string;
  judul: string;
}) =>
  new Document({
    background: {
      color: "FFFFFF"
    },
    styles: {
      default: {
        document: {
          run: {
            font: "Arial",
            size: "11pt",
            color: "000000",
          },
        },
      },
    },
    sections: [
      {
        headers: {
          default: createHeader(),
        },
        properties: {
          page: {
            margin: {
              top: convertMillimetersToTwip(12.5),
              bottom: convertMillimetersToTwip(12.5),
              left: convertMillimetersToTwip(22.2),
              right: convertMillimetersToTwip(19),
              header: convertMillimetersToTwip(12.7),
              footer: convertMillimetersToTwip(12.7),
            },
          },
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "NOTA DINAS",
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "NOMOR: [@NomorND]",
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [],
          }),
          createPembuka(context.nomor),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            indent: { firstLine: convertMillimetersToTwip(10) },
            spacing: { line: 300 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text: `Sehubungan dengan telah ditetapkannya Peraturan Menteri Keuangan Nomor ${context.nomor} tentang ${context.judul} yang telah ditetapkan oleh Menteri Keuangan pada tanggal ${context.tanggal}, perlu kiranya segera diproses permohonan pengundangan pada Kementerian Hukum dan HAM. Peraturan tersebut telah dilakukan proses harmonisasi oleh Kementerian Hukum dan HAM dan tidak terdapat permasalahan baik secara substansi dan/atau prosedur.`,
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            indent: { firstLine: convertMillimetersToTwip(10) },
            spacing: { line: 300 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text: "Berkenaan dengan hal tersebut di atas, terlampir kami sampaikan konsep Surat Ibu atas nama Sekretaris Jenderal kepada Direktur Jenderal Peraturan Perundang-undangan Kementerian Hukum dan HAM untuk mohon penetapan Ibu.",
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            indent: { firstLine: convertMillimetersToTwip(10) },
            spacing: { line: 300 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text: "Demikian disampaikan, atas perhatian dan perkenan Ibu, kami ucapkan terima kasih.",
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [],
          }),
          createKolomTtd(),
        ],
      },
    ],
  });
//#endregion

//#region createHeader
const createHeader = () =>
  new Header({
    children: [
      new Table({
        columnWidths: [1564, 8006],
        borders: {
          top: { style: BorderStyle.NONE },
          bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE },
          right: { style: BorderStyle.NONE },
          insideHorizontal: { style: BorderStyle.NONE },
          insideVertical: { style: BorderStyle.NONE },
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                rowSpan: 3,
                width: {
                  size: 1564,
                  type: WidthType.DXA,
                },
                children: [
                  new Paragraph({
                    children: [
                      new ImageRun({
                        data: logo,
                        transformation: {
                          width: 87,
                          height: 83,
                        },
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: {
                  size: 8006,
                  type: WidthType.DXA,
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "KEMENTERIAN KEUANGAN REPUBLIK INDONESIA",
                        font: "Arial",
                        size: "13pt",
                        color: "000000",
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            height: {
              value: 461,
              rule: HeightRule.ATLEAST,
            },
            children: [
              new TableCell({
                width: {
                  size: 8006,
                  type: WidthType.DXA,
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "SEKRETARIAT JENDERAL",
                        font: "Arial",
                        size: "11pt",
                        color: "000000",
                        bold: true,
                      }),
                    ],
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "BIRO HUKUM",
                        font: "Arial",
                        size: "11pt",
                        color: "000000",
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 8006,
                  type: WidthType.DXA,
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "GEDUNG DJUANDA I LANTAI 14, JALAN DR. WAHIDIN RAYA NOMOR I, JAKARTA 10710, KOTAK POS 21; TELEPON (021) 3449230, 3813857 EXT. 6378; FAKSIMILE (021) 3811914; LAMAN:WWW.KEMENKEU.GO.ID",
                        font: "Arial",
                        size: "7pt",
                        color: "000000",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            height: {
              value: 60,
              rule: HeightRule.EXACT,
            },
            children: [
              new TableCell({
                columnSpan: 2,
                borders: {
                  bottom: {
                    style: BorderStyle.SINGLE,
                    size: 16,
                    color: "000000",
                  },
                },
                children: [],
              }),
            ],
          }),
        ],
      }),
      new Paragraph({
        children: [],
      }),
    ],
  });
//#endregion

//#region createPembuka
const createPembuka = (nomor: string) => {
  const cell = (
    text: string,
    widthSize: number,
    options?: { alignment?: AlignmentType; columnSpan?: number }
  ) =>
    new TableCell({
      columnSpan: options?.columnSpan,
      margins: {
        top: 20,
        right: 108,
      },
      width: {
        size: widthSize,
        type: WidthType.DXA,
      },
      children: [
        new Paragraph({
          alignment: options?.alignment,
          children: [
            new TextRun({
              text,
              font: "Arial",
              size: "11pt",
              color: "000000",
            }),
          ],
        }),
      ],
    });

  return new Table({
    width: {
      size: 0,
      type: WidthType.AUTO,
    },
    columnWidths: [1523, 374, 7672],
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE },
    },
    rows: [
      new TableRow({
        children: [
          cell("Yth", 1573),
          cell(":", 374, { alignment: AlignmentType.CENTER }),
          cell("Kepala Biro Hukum", 7672),
        ],
      }),
      new TableRow({
        children: [
          cell("Dari", 1573),
          cell(":", 374, { alignment: AlignmentType.CENTER }),
          cell("Kepala Bagian Hukum Kekayaan Negara dan Informasi Hukum", 7672),
        ],
      }),
      new TableRow({
        children: [
          cell("Hal", 1573),
          cell(":", 374, { alignment: AlignmentType.CENTER }),
          cell(
            `Permohonan Pengundangan atas Peraturan Menteri Keuangan Nomor ${nomor}`,
            7672
          ),
        ],
      }),
      new TableRow({
        children: [
          cell("Tanggal", 1573),
          cell(":", 374, { alignment: AlignmentType.CENTER }),
          cell("[@TanggalND]", 7672),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            borders: {
              bottom: {
                size: 16,
                style: BorderStyle.SINGLE,
                color: "000000",
              },
            },
            columnSpan: 3,
            children: [],
          }),
        ],
      }),
    ],
  });
};
//#endregion

//#region createKolomTtd
const createKolomTtd = () =>
  new Table({
    width: {
      size: 0,
      type: WidthType.AUTO,
    },
    columnWidths: [5618, 3951],
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 5618,
              type: WidthType.DXA,
            },
            children: [],
          }),
          new TableCell({
            width: {
              size: 3951,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Ditandatangani secara elektronik",
                    font: "Arial",
                    size: "11pt",
                    color: "BFBFBF",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 5618,
              type: WidthType.DXA,
            },
            children: [],
          }),
          new TableCell({
            width: {
              size: 3951,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Indra Eka Putra",
                    font: "Arial",
                    size: "11pt",
                    color: "000000",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
//#endregion
