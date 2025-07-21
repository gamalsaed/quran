import { useEffect, useState } from "react";
export default function ElMoshaf({ soraId }) {
  const [ayat, setAyat] = useState(null);
  const [errors, setErrors] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const NumberOfayatPerPage = 10;
  const pagesCount = Math.round(ayat?.length / NumberOfayatPerPage);
  let end = pageNumber * NumberOfayatPerPage;
  let start = end - NumberOfayatPerPage;
  const ayatPerPage = ayat?.slice(start, end);

  function nextPage() {
    console.log(pagesCount);
    if (pageNumber === pagesCount || ayat === null) {
      return;
    }
    setPageNumber((prev) => prev + 1);
  }
  function prevPage() {
    if (pageNumber === 1 || ayat === null) {
      return;
    }
    setPageNumber((prev) => prev - 1);
  }

  useEffect(() => {
    async function ayatFn() {
      setLoading(true);
      try {
        const sora = await fetch(
          `https://alquran.vip/APIs/ayah?number=${soraId}`
        );
        if (!sora.ok) throw new Error("Failed to get El Ayat");
        const data = await sora.json();
        setAyat(data);
      } catch (err) {
        setErrors("Failed to get the El Ayat");
      } finally {
        setLoading(false);
      }
    }

    ayatFn();
  }, [soraId]);
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full text-3xl leading-15 max-w-[90%] break-words bg-[#bfbcbc] text-black p-5  rounded-xl text-right mx-auto">
        {!loading ? (
          ayatPerPage?.map((aya) => {
            return <span key={aya.id}>{aya.text} </span>;
          })
        ) : (
          <p className="text-left">Loading...</p>
        )}
      </div>
      <div className="w-full max-w-[90%] mx-auto flex justify-between flex-row-reverse mb-5 mt-2">
        <span
          onClick={nextPage}
          className="border-1 border-[#bfbcbc] p-2 rounded-full hover:bg-[#bfbcbc] hover:text-white cursor-pointer duration-200"
        >
          Next
        </span>
        <span>
          {errors && ayat === null ? (
            <h2 className="text-red-500">An Error Occured {errors}</h2>
          ) : (
            `${pageNumber} Out Of ${pagesCount}`
          )}
        </span>
        <span
          onClick={prevPage}
          className="border-1 border-[#bfbcbc] p-2 rounded-full hover:bg-[#bfbcbc] hover:text-white cursor-pointer duration-200"
        >
          Prev
        </span>
      </div>
    </div>
  );
}
