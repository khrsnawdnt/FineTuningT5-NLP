
<h1 align="center">
  <br>
  <img src="https://github.com/khrsnawdnt/FineTuningT5-NLP/blob/0fb43f24a56fd541c50cfd8b56a308a2ac79e26d/img/logo.png" alt="K3 Summarization" width="200">
  <br>
  <br>
  K3 Summarization [Fine-Tuning Transformer for Summary Generation]
  <br>
</h1>

<h4 align="center">Repository ini merupakan tugas dari matakuliah Natural Language Processing dan isinya mengenai kode dan sumber daya untuk fine-tuning model transformer untuk generate ringkasan menggunakan perpustakaan Hugging Face Transformers</h4>

<p align="center">
  <a href="#gambaran-umum">Gambaran Umum</a> •
  <a href="#persyaratan">Persyaratan</a> •
  <a href="#Catatan">Catatan</a> •
  <a href="#how-to-use">How to Use</a>
</p>


## Gambaran Umum

Summarization adalah tugas pemrosesan bahasa alami (NLP) yang melibatkan penyusutan informasi dari teks yang diberikan menjadi versi yang lebih pendek sambil tetap mempertahankan makna utamanya. Proyek ini berfokus pada fine-tuning model berbasis transformer, memanfaatkan kekuatan representasi bahasa yang telah dilatih sebelumnya, untuk tugas khusus meng-generate teks yang sudah diringkas.

## Persyaratan

•	Python 3.x <br>
•	PyTorch <br>
•	Hugging Face Transformers (https://huggingface.co/) <br>
•	Dataset from Kaggle (https://www.kaggle.com/code/eggwhites2705/transformers-summarization-t5/input) <br>
•	Model T5 <br>

## Instalasi

```bash
# Clone this repository
$ git clone https://github.com/amitmerchant1990/electron-markdownify

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Catatan
Kami menggunakan Model T5 dan pada Dataset ini kami menggunakan dataset berita berbahasa inggris. Kenapa bahasa inggris? Karena pada model T5 hanya bisa menghasilkan bahasa inggris, jika ingin menggunakan bahasa lainnya harus menggunakan model MT5

Kemudian kami melakukan Training Loop. Kenapa? Karena Training loop digunakan dalam proses fine-tuning model machine learning untuk mengoptimalkan parameter model agar sesuai dengan data pelatihan. Training loop adalah iterasi berulang yang terdiri dari langkah-langkah seperti pembacaan batch data, perhitungan nilai loss, dan pembaruan parameter model menggunakan metode optimasi. Loop ini memungkinkan model untuk secara adaptif menyesuaikan diri dengan data pelatihan, meningkatkan kinerja, dan mengurangi nilai loss. Selama fine-tuning transformer untuk generasi ringkasan, training loop diperlukan agar model dapat belajar dari data pelatihan yang spesifik untuk tugas tersebut. Melalui beberapa iterasi training, model dapat menyesuaikan bobotnya agar dapat menghasilkan ringkasan yang sesuai dengan kebutuhan.

Pada Matriks T5 ini berbeda dari beberapa model lainnya, contohnya seperti Rouge. Pada Model T5 untuk mencari akurasi modelnya menggunakan Rouge, apa itu Rouge? ROUGE (Recall-Oriented Understudy for Gisting Evaluation) adalah kumpulan metrik evaluasi yang digunakan untuk mengukur kualitas ringkasan atau hasil pemrosesan bahasa alami dengan membandingkan ringkasan yang dihasilkan dengan ringkasan referensi yang benar atau asli.

Terdapat beberapa metrik ROUGE yang umumnya digunakan, seperti ROUGE-N (mengukur kesamaan n-gram antara ringkasan yang dihasilkan dan ringkasan referensi), ROUGE-L (mengukur kesamaan panjang rangkaian kata terpanjang antara ringkasan yang dihasilkan dan ringkasan referensi), dan ROUGE-W (mengukur kesamaan kata terbobot antara ringkasan yang dihasilkan dan ringkasan referensi). Penggunaan metrik ROUGE membantu mengukur sejauh mana ringkasan yang dihasilkan oleh model cocok dengan ringkasan yang diinginkan atau benar. Dalam fine-tuning transformer untuk generasi ringkasan, metrik ROUGE dapat digunakan sebagai panduan untuk mengevaluasi sejauh mana model dapat menghasilkan ringkasan yang mirip dengan referensi. Evaluasi ini penting untuk memastikan bahwa model menghasilkan ringkasan yang informatif dan relevan.

Untuk Pre-Trained nya kami menggunakan AutoTokenizer, AutoTokenizer adalah bagian dari perpustakaan Transformers oleh Hugging Face, yang menyediakan implementasi dan model-model transformer pre-trained. Tokenizer bertanggung jawab untuk mengonversi teks menjadi token, yaitu unit-unit terkecil yang dipahami oleh model transformer.




