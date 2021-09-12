<template>
    <div class="warga">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                           DATA WARGA
                        </div>
                        <div class="card-body">
                            <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH DATA</router-link>
                            <hr>

                            <div class="table-responsive mt-2">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>NAMA_WARGA</th>
                                        <th>ALAMAT</th>
                                        <th>PEKERJAAN</th>
                                        <th>NO_TELP</th>
                                        <th>AKSI</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="warga in warga" :key="warga.id">
                                        <td>{{ warga.nama_warga }}</td>
                                        <td>{{ warga.alamat }}</td>
                                        <td>{{ warga.pekerjaan }}</td>
                                        <td>{{ warga.no_telp }}</td>
                                        <td class="text-center">
                                            <router-link :to="{name: 'edit', params: { id: warga.id }}" class="btn btn-sm btn-primary mr-2">EDIT</router-link>
                                            <button @click.prevent="WargaDelete(warga.id)" class="btn btn-sm btn-danger">HAPUS</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

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
                warga: []
            }
        },
        created() {
            axios.get('http://localhost:8000/warga').then(response => {
                this.warga = response.data.data;
            });
        },
        methods: {
            WargaDelete(id)
            {
                axios.delete(`http://localhost:8000/warga/${id}`)
                    .then(response => {
                        this.warga.splice(this.warga.indexOf(id), 1);
                        console.log(response);
                    }).catch(error => {
                    console.log(error.response);
                });
            }
        }

    }
</script>