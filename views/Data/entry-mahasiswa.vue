<template>
  <v-container style="width: 700px; margin-left: 80px">
    <v-card class="profile-card" elevation="10" elevation-color="#AC918B" style="max-width: 600px">
      <!-- TITLE START -->
      <v-row justify="center" class="mt-3 mb-3">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">
          <v-btn variant="text"> ENTRY DATA MAHASISWA </v-btn>
        </v-card-title>
      </v-row>
      <!-- TITLE END -->

      <!-- RULES START -->
      <v-row justify="center" class="mt-1" v-if="showRules">
        <span class="red--text">Isi Data Terlebih Dahulu</span>
      </v-row>
      <!-- RULES END -->

      <!-- FIELD START -->
      <v-row class="ml-2 mr-2">
        <v-text-field
          label="NPM"
          v-model="mahasiswa.npm"
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
      </v-row>
      <v-row class="ml-2 mr-2">
        <v-text-field
          label="NAMA"
          v-model="mahasiswa.nama"
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
      </v-row>
      <v-row class="ml-2 mr-2">
        <v-text-field
          label="IPK"
          v-model="mahasiswa.ipk"
          variant="outlined"
          :rules="[rules.required, rules.validIpk]"
        ></v-text-field>
      </v-row>
      <!-- FIELD END -->

      <!-- SUBMIT -->
      <v-row justify="center" class="mt-3 mb-3">
        <v-btn rounded="xl" size="small" color="#AC918B" @click="submitMahasiswa"> SIMPAN </v-btn>
      </v-row>
      <!-- SUBMIT END -->

      <!-- DIALOG START -->
      <v-dialog v-model="dialog" max-width="500" rounded="pill">
        <v-card>
          <v-card-title class="headline">Data Mahasiswa Berhasil Disimpan</v-card-title>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">OKE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- DIALOG END -->
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Mahasiswa } from '@/model/Mahasiswa'

export default {
  data() {
    return {
      mahasiswa: new Mahasiswa('', '', ''), // Menambahkan IPK ke objek mahasiswa
      showRules: false, // Variabel untuk mengontrol apakah pesan peringatan ditampilkan atau tidak
      dialog: false // Variabel untuk mengontrol tampilan dialog aksi
    }
  },
  computed: {
    rules() {
      return {
        required: (value) => !!value || 'Masukan data', // Menambahkan aturan validasi required ke dalam rules
        validIpk: (value) => {
          // Menambahkan aturan validasi IPK
          const ipk = parseFloat(value)
          if (isNaN(ipk) || ipk < 0 || ipk > 4) {
            return 'IPK harus antara 0 sampai 4'
          }
          return true
        }
      }
    }
  },
  methods: {
    submitMahasiswa() {
      if (!this.mahasiswa.npm || !this.mahasiswa.nama || !this.mahasiswa.ipk) {
        // Jika ada bidang yang kosong, tampilkan pesan peringatan
        this.showRules = true
      } else {
        // Jika data berhasil disimpan, tampilkan dialog aksi
        this.dialog = true
        // Bersihkan data setelah dialog ditutup
        this.mahasiswa = new Mahasiswa('', '', '')
        this.showRules = false // Mengatur kembali showRules menjadi false setelah tombol SUBMIT diklik
      }
    }
  }
}
</script>
