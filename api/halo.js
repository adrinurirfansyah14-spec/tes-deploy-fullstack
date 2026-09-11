export default function handler(req, res) {
  res.status(200).json({ 
    pesan: "Halo dari Backend! Koneksi full-stack berhasil 🎉" 
  });
}