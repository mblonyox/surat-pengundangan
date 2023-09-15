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
export const createSurat = (context: {
  nomor: string;
  tanggal: string;
  judul: string;
  harmonNomor: string;
  harmonTanggal: string;
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
          createPembuka(context.nomor),
          new Paragraph({
            children: [],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Yth. Direktur Jenderal Peraturan Perundang-undangan",
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Kementerian Hukum dan Hak Asasi Manusia",
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Jakarta",
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
            indent: { firstLine: convertMillimetersToTwip(10) },
            spacing: { line: 300 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text: "Sesuai dengan ketentuan Pasal 81 sampai dengan Pasal 87 Undang-Undang Nomor 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan sebagaimana telah beberapa kali diubah terakhir dengan Undang-Undang Nomor 13 Tahun 2022, diatur bahwa Peraturan Perundang-undangan wajib diundangkan. Dengan demikian Peraturan Menteri Keuangan yang telah ditetapkan oleh Menteri Keuangan wajib diundangkan dalam Berita Negara Republik Indonesia.",
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
                text: `Berkenaan dengan hal tersebut di atas, dengan hormat disampaikan Peraturan Menteri Keuangan Nomor ${context.nomor} tentang ${context.judul} yang telah ditetapkan oleh Menteri Keuangan pada tanggal ${context.tanggal} beserta naskah asli elektronik`,
                font: "Arial",
                size: "11pt",
                color: "000000",
              }),
              new TextRun({
                text: " (softcopy).",
                font: "Arial",
                size: "11pt",
                color: "000000",
                italics: true,
              }),
            ],
          }),
          new Paragraph({
            indent: { firstLine: convertMillimetersToTwip(10) },
            spacing: { line: 300 },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text: `Peraturan tersebut telah dilakukan proses harmonisasi oleh Kementerian Hukum dan HAM dan tidak terdapat permasalahan baik secara substansi dan/atau prosedur sebagaimana disampaikan dalam surat Direktur Jenderal Peraturan Perundang-undangan Kementerian Hukum dan Hak Asasi Manusia nomor ${context.harmonNomor} tanggal ${context.harmonTanggal}, oleh karenanya mohon dapat diproses pengundangannya dalam waktu yang tidak terlalu lama.`,
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
                text: "Demikian disampaikan untuk menjadi periksa, atas perhatian dan kerja samanya diucapkan terima kasih.",
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
                        text: "GEDUNG JUANDA I LANTAI 4, JALAN DR. WAHIDIN NOMOR 1, JAKARTA 10710, KOTAK POS 21 ",
                        font: "Arial",
                        size: "7pt",
                        color: "000000",
                      }),
                    ],
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: " TELEPON (021) 3449230, 3852143; FAKSIMILE (021) 3512215; SITUS: WWW.KEMENKEU.GO.ID ",
                        font: "Arial",
                        size: "7pt",
                        color: "000000",
                      }),
                    ],
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: " PUSAT KONTAK LAYANAN KEMENTERIAN KEUANGAN, TELEPON 134 DAN SUREL KEMENKEU.PRIME@KEMENKEU.GO.ID",
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
    columnWidths: [1368, 404, 4280, 3513],
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
          cell("Nomor", 1368),
          cell(":", 404, { alignment: AlignmentType.CENTER }),
          cell("[@NomorND]", 4280),
          cell("[@TanggalND]", 3513, { alignment: AlignmentType.RIGHT }),
        ],
      }),
      new TableRow({
        children: [
          cell("Sifat", 1368),
          cell(":", 404, { alignment: AlignmentType.CENTER }),
          cell("Sangat Segera", 7793, { columnSpan: 2 }),
        ],
      }),
      new TableRow({
        children: [
          cell("Lampiran", 1368),
          cell(":", 404, { alignment: AlignmentType.CENTER }),
          cell("1 Berkas", 7793, { columnSpan: 2 }),
        ],
      }),
      new TableRow({
        children: [
          cell("Hal", 1368),
          cell(":", 404, { alignment: AlignmentType.CENTER }),
          cell(
            `Permohonan Pengundangan atas Peraturan Menteri Keuangan Nomor ${nomor}`,
            7793,
            { columnSpan: 2 }
          ),
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
    columnWidths: [5761, 3804],
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
              size: 5761,
              type: WidthType.DXA,
            },
            margins: {
              right: convertMillimetersToTwip(2),
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: "a.n. ",
                    font: "Arial",
                    size: "11pt",
                    color: "000000",
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: {
              size: 3804,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Sekretaris Jenderal",
                    font: "Arial",
                    size: "11pt",
                    color: "000000",
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Kepala Biro Hukum",
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
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 5761,
              type: WidthType.DXA,
            },
            children: [],
          }),
          new TableCell({
            width: {
              size: 3804,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph({ children: [] }),
              new Paragraph({ children: [] }),
              new Paragraph({ children: [] }),
              new Paragraph({ children: [] }),
              new Paragraph({ children: [] }),
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
              size: 5761,
              type: WidthType.DXA,
            },
            children: [],
          }),
          new TableCell({
            width: {
              size: 3804,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Tio Serepina Siahaan",
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
