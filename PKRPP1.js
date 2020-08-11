class hargaTanah{
    constructor(p, l, h){
    this.panjang = p 
    this.lebar = l
    this.harga = h 
    }

    total = () => {
        return this.panjang * this.lebar * this.harga * 115 / 100
    }
}

let tanah = new hargaTanah(20.5, 30, 1500000)

console.log("Nominal yang harus dibayar = " + tanah.total());