<template>
    <div class="posts">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            EDIT DATA WARGA
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="WargaUpdate">

                                <div class="form-group">
                                    <label>NAMA WARGA</label>
                                    <input type="text" class="form-control" v-model="warga.nama_warga"
                                           placeholder="Masukkan nama warga">
                                    <div v-if="validation.nama_warga">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.nama_warga[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>ALAMAT</label>
                                    <textarea class="form-control" v-model="warga.alamat" rows="5"
                                              placeholder="Masukkan alamat"></textarea>
                                    <div v-if="validation.alamat">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.alamat[0] }}
                                        </div>
                                    </div>
                                </div>

                                  <div class="form-group">
                                    <label>PEKERJAAN</label>
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
                                    <input type="number" class="form-control" v-model="warga.no_telp"
                                           placeholder="Masukkan no_telp">
                                    <div v-if="validation.no_telp">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.no_telp[0] }}
                                        </div>
                                    </div>
                                </div>
                                

                                <div class="form-group">
                                    <button type="submit" class="btn btn-md btn-success mr-2">UPDATE</button>
                                    <button type="reset" class="btn btn-md btn-danger">RESET</button>
                                </div>

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
        created() {
            axios.get(`http://localhost:8000/warga/${this.$route.params.id}`)
                .then((response) => {
                this.warga = response.data.data;
            });
        },
        methods: {
            WargaUpdate() {
                axios.put(`http://localhost:8000/warga/${this.$route.params.id}`, this.warga)
                    .then((response) => {
                        this.$router.push({
                            name: 'warga'
                        });
                        console.log(response);
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>