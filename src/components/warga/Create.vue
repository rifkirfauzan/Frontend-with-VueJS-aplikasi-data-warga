<template>
    <div class="warga">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            TAMBAH DATA WARGA
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="WargaStore">

                                <div class="form-group">
                                    <label>NAMA WARGA</label>
                                    <input type="text" class="form-control" v-model="warga.nama_warga"
                                           placeholder="Masukkan nama_warga">
                                    <div v-if="validation.nama_warga">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.nama_warga[0] }}
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>Alamat</label>
                                    <textarea class="form-control" v-model="warga.alamat" rows="5"
                                              placeholder="Masukkan alamat"></textarea>
                                    <div v-if="validation.alamat">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.alamat[0] }}
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group">
                                    <label>Pekerjaan</label>
                                    <input type="text" class="form-control" v-model="warga.pekerjaan"
                                           placeholder="Masukkan pekerjaan">
                                    <div v-if="validation.pekerjaan">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.pekerjaan[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>No_telp</label>
                                    <input type="text" class="form-control" v-model="warga.no_telp"
                                           placeholder="Masukkan no_telp">
                                    <div v-if="validation.no_telp">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.no_telp[0] }}
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-md btn-success mr-2">SIMPAN</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                warga: {},
                validation: []
            }
        },
        methods: {
            WargaStore() {
                axios.post('http://localhost:8000/warga', this.warga)
                    .then((response) => {
                        this.$router.push({
                            name: 'warga'
                        });
                        console.log(response.data.data);
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>