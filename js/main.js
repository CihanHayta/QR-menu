

// export const fetchMenu = async () => {
//     // Fetch ile db.json'dan veriler alındı
//     const res = await fetch("../db.json");

//     // Veriler Js'de kullanılacak tipe çevirildi
//    console.log(res);
   
//   };



// Db.json'dan verileri alan fonksiyon
export const fetchMenu = async () => {
    // Fetch ile db.json'dan veriler alındı
    const res = await fetch("../db.json");
    // Veriler Js'de kullanılacak tipe çevirildi
    const data = await res.json();
  
    return data;
    console.log(data);
    
  };
  

  console.log("hata 2");
  