const articleData = [
    { 
        judul: "Sejarah Kesehatan Mental",
        image: "/asset/historyofmental.jpeg",
        paraghrapSatu:"Sejarah kesehatan mental dimulai dari zaman kuno, di mana gangguan mental sering kali dikaitkan dengan kekuatan supranatural atau gangguan roh jahat. Pada masa itu, orang dengan masalah mental sering diisolasi atau diperlakukan dengan cara yang keras dan tidak manusiawi. Namun, pada abad ke-5 SM, Hippocrates, seorang dokter Yunani, mulai mengubah cara pandang ini dengan memperkenalkan gagasan bahwa gangguan mental disebabkan oleh ketidakseimbangan cairan tubuh, yang dikenal sebagai teori \"humor\". Meskipun teori ini masih jauh dari pemahaman modern, hal ini menjadi awal dari pendekatan medis terhadap kesehatan mental.",
        paraghrapDua:"Memasuki abad pertengahan dan Renaissance, perawatan untuk gangguan mental tetap sangat terbatas, dan institusi khusus, yang dikenal sebagai rumah sakit jiwa, mulai berdiri. Namun, perawatan sering kali tidak manusiawi, dengan pasien dikurung dan diperlakukan dengan buruk. Baru pada abad ke-18 dan ke-19, gerakan reformasi mulai muncul dengan tokoh seperti Philippe Pinel di Prancis yang mempromosikan perawatan yang lebih manusiawi dan bebas dari kekerasan. Pemahaman modern tentang kesehatan mental mulai berkembang pesat di abad ke-20, dengan munculnya psikoanalisis, psikiatri, dan ilmu psikologi yang mengarah pada pendekatan yang lebih ilmiah dan empatik terhadap kesehatan mental" 
    },
    {
        judul:"Kenapa Kesehatan Mental Penting?",
        image:"/asset/mental-healthmatters.png",
        paraghrapSatu:"Kesehatan mental memiliki peran yang sangat penting dalam kehidupan sehari-hari, karena memengaruhi cara seseorang berpikir, merasa, dan berperilaku. Ketika kesehatan mental terjaga dengan baik, seseorang lebih mampu mengatasi stres, menjalin hubungan yang sehat, dan produktif dalam pekerjaan maupun aktivitas sehari-hari. Sebaliknya, gangguan kesehatan mental dapat menghambat kemampuan seseorang untuk berfungsi dengan baik dalam masyarakat, serta meningkatkan risiko terhadap berbagai penyakit fisik, seperti penyakit jantung dan gangguan tidur.",
        paraghrapDua:"Selain itu, kesehatan mental juga berhubungan langsung dengan kualitas hidup dan kebahagiaan. Masalah seperti depresi dan kecemasan dapat menurunkan semangat hidup, membuat seseorang merasa terisolasi, dan mengurangi kepuasan terhadap hidup secara keseluruhan. Oleh karena itu, menjaga kesehatan mental sama pentingnya dengan menjaga kesehatan fisik. Dukungan sosial, gaya hidup seimbang, serta akses ke layanan kesehatan mental yang memadai merupakan kunci untuk memastikan kesejahteraan mental yang optimal."
    },
    {
        judul:"Akses Konseling Terhadap Anak Muda yang Minim di Indonesia",
        image:"asset/konseling.jpg",
        paraghrapSatu:"Di Indonesia, akses terhadap layanan kesehatan mental bagi anak muda masih tergolong minim. Berdasarkan data dari Riset Kesehatan Dasar (Riskesdas) 2018, prevalensi gangguan mental emosional pada remaja usia 15 tahun ke atas mencapai 9,8%. Namun, banyak dari mereka yang tidak mendapatkan akses ke layanan konseling yang memadai. Faktor seperti stigma, kurangnya fasilitas kesehatan mental di berbagai daerah, dan mahalnya biaya konsultasi menjadi hambatan utama bagi anak muda untuk mendapatkan dukungan yang mereka butuhkan.",
        paraghrapDua:" "
    }
];
localStorage.setItem("artikel",JSON.stringify(articleData));

let artikel = JSON.parse(localStorage.getItem('artikel'));


if(artikel){
    artikel.forEach(isi => {
        makeElementArticle(isi);
    });
}

function makeElementArticle(isi) {
    const article = document.createElement('article');
    article.classList.add("card")

    const heading = document.createElement('h2');
    heading.textContent = isi.judul;

    
    const image = document.createElement('img');
    image.src = isi.image;
    image.classList.add('featured-image')

    const paragraphSatu = document.createElement('p');
    paragraphSatu.textContent = isi.paraghrapSatu;

    const paragraphDua = document.createElement('p');
    paragraphDua.textContent = isi.paraghrapDua;

    article.appendChild(heading);
    article.appendChild(image);
    article.appendChild(paragraphSatu);
    article.appendChild(paragraphDua);

    const section = document.querySelector('#section');
    
    document.getElementById('content').insertBefore(article, section);
}

