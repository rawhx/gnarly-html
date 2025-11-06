async function getBarang(event) {
    event.preventDefault();

    try {
        const response = await api.get("/barang");
        console.log(response.data.data)
    } catch (error) {
        console.error("getBarang:", error.response?.data || error);
        alert("Gagal mengambil data barang");
    }
}