<script setup lang="ts">
import { reactive } from "vue";
import { Packer } from "docx";
import { saveAs } from "file-saver";
import { createSurat } from "./utils/createSurat.js";
import { createPengantar } from "./utils/createPengantar.js";

const context = reactive({ nomor: "", tanggal: "", judul: "", harmonNomor: "", harmonTanggal: "" });

const onClickUnduhSurat = () => {
  const doc = createSurat(context);

  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    saveAs(
      blob,
      `Konsep Surat Pengundangan PMK ${context.nomor.replaceAll("/", "~")}.docx`
    );
  });
};
const onClickUnduhPengantar = () => {
  const doc = createPengantar(context);

  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    saveAs(
      blob,
      `Konsep Pengantar Pengundangan PMK ${context.nomor.replaceAll(
        "/",
        "~"
      )}.docx`
    );
  });
};
</script>

<template>
  <main class="container">
    <h1>Generator Surat Pengundangan</h1>
    <form>
      <div>
        <label for="nomor">Nomor PMK</label>
        <input id="nomor" type="text" placeholder="123 TAHUN 2023" v-model="context.nomor" />
      </div>
      <div>
        <label for="tanggal">Tanggal PMK</label>
        <input id="tanggal" type="text" placeholder="1 Januari 2023" v-model="context.tanggal" />
      </div>
      <div>
        <label for="judul">Judul PMK</label>
        <textarea id="judul" type="text" placeholder="Keuangan Negara..." v-model="context.judul"></textarea>
      </div>
      <div>
        <label for="harmon-nomor">Nomor Surat Harmonisasi</label>
        <input id="harmon-nomor" type="text" placeholder="PPE.PP.05.01-001" v-model="context.harmonNomor" />
      </div>
      <div>
        <label for="harmon-tanggal">Tanggal Surat Harmonisasi</label>
        <input id="harmon-tanggal" type="text" placeholder="1 Januari 2023" v-model="context.harmonTanggal" />
      </div>
    </form>
    <button @click="onClickUnduhSurat">
      Unduh Surat Permohonan Pengundangan
    </button>
    <button @click="onClickUnduhPengantar">Unduh Nota Dinas Pengantar</button>
  </main>
</template>

<style scoped>
main {
  padding-top: 4rem;
  padding-bottom: 2rem;
}

h1 {
  text-align: center;
}
</style>
