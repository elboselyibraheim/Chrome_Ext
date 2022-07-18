const api_url = "https://api.quran.sutanlab.id/surah";
const surahArName = data.data[surah].name.long;
const surahEnName = data.data[surah].name.transliteration.en;

allSurahs.forEach((surah, index) => {
  surah.addEventListener("click", () => {
    fetch(`api_url ${index + 1}`).then((response) => response.json());
    console.log(response);
  });
});
//   .then((data) => {
//         let verses = data.data.verses;
//         ayahsAudios = [];
//         ayahsTextAra = [];
//         ayahsTextEn = [];
//         verses.forEach((verse) => {
//           ayahsAudios.push(verse.audio.primary);
//           ayahsTextAra.push(verse.text.arab);
//           ayahsTextEn.push(verse.text.transliteration.en);
//         });

//         let ayahIndex = 0;
//         changeAyah(ayahIndex);
//         audio.addEventListener("ended", () => {
//           ayahIndex++;
//           if (ayahIndex < ayahsAudios.length) {
//             changeAyah(ayahIndex);
//           } else {
//             ayahIndex = 0;
//             changeAyah(ayahIndex);
//             audio.pause();
//           }
//         });

//         function changeAyah(index) {
//           audio.src = ayahsAudios[index];
//           ayahAr.innerHTML = ayahsTextAra[index];
//           ayahEn.innerHTML = ayahsTextEn[index];
//           audio.play();
//         }
//       });
//   });
// });
