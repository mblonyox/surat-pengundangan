import { createReport } from "docx-templates";

import templateUrl from "../assets/template-surat-permohonan-pengundangan.docx?url";

//#region createSurat
export const createSurat = async (data: {
  nomor_pmk: string;
  tanggal_pmk: string;
  judul_pmk: string;
  nomor_harmon: string;
  tanggal_harmon: string;
}) => {
  const template = await fetch(templateUrl)
    .then(res => res.arrayBuffer())
    .then(buf => new Uint8Array(buf));
  return createReport({
    template,
    data,
    noSandbox: true
  })
}
