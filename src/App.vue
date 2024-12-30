<script setup lang="ts">
import { reactive } from "vue";
import { saveAs } from "file-saver";
import { createSurat } from "./utils/createSurat.js";
import { createPengantar } from "./utils/createPengantar.js";

const data = reactive({ nomor_pmk: "", tanggal_pmk: "", judul_pmk: "", nomor_harmon: "", tanggal_harmon: "" });

const onClickUnduhSurat = async () => {
  const doc = await createSurat(data);
  const blob = new Blob([doc], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })

  // saveAs from FileSaver will download the file
  saveAs(
    blob,
    `Konsep Surat Pengundangan PMK ${data.nomor_pmk.replaceAll("/", "~")}.docx`
  );
}

const onClickUnduhPengantar = async () => {
  const doc = await createPengantar(data);
  const blob = new Blob([doc], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })

  // saveAs from FileSaver will download the file
  saveAs(
    blob,
    `Konsep Pengantar Pengundangan PMK ${data.nomor_pmk.replaceAll(
      "/",
      "~"
    )}.docx`
  );
};
</script>

<template>
  <main class="container">
    <hgroup>
      <h1>Generator Surat Pengundangan</h1>
      <p>v0.1.0 - 30 Desember 2024</p>
    </hgroup>
    <form>
      <div>
        <label for="nomor_pmk">Nomor PMK</label>
        <input id="nomor_pmk" type="text" placeholder="123 Tahun 2025" v-model="data.nomor_pmk" />
      </div>
      <div>
        <label for="tanggal_pmk">Tanggal PMK</label>
        <input id="tanggal_pmk" type="text" placeholder="1 Januari 2025" v-model="data.tanggal_pmk" />
      </div>
      <div>
        <label for="judul_pmk">Judul PMK</label>
        <textarea id="judul_pmk" type="text" placeholder="Keuangan Negara..." v-model="data.judul_pmk"></textarea>
      </div>
      <div>
        <label for="nomor_pmk">Nomor Surat Harmonisasi</label>
        <input id="nomor_pmk" type="text" placeholder="PPE.PP.01.05-001" v-model="data.nomor_harmon" />
      </div>
      <div>
        <label for="tanggal_harmon">Tanggal Surat Harmonisasi</label>
        <input id="tanggal_harmon" type="text" placeholder="1 Januari 2025" v-model="data.tanggal_harmon" />
      </div>
    </form>
    <input type="button" @click="onClickUnduhSurat" value="Unduh Surat Permohonan" />
    <input type="button" class="secondary" @click="onClickUnduhPengantar" value="Unduh Nota Pengantar" />
  </main>
</template>

<style scoped>
main {
  padding-top: 4rem;
  padding-bottom: 2rem;
}

hgroup {
  text-align: center;
}
</style>
