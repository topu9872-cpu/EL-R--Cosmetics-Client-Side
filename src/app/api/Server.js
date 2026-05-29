export const  getProducts=async()=>{
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/products`);
        if(!res.ok) throw new Error('faild to fetch get products data')
          console.log(process.env.NEXT_PUBLIC_SERVER_API)
            return res.json();
    }catch(error){
        console.log(error)
        return [];
    }
};


export const getSearchProducts=async(search='')=>{
    try{
const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/products/${search}`);
if(!res.ok) throw new Error('faild to fatch search products data')
    return res.json();
    }catch(error){
        console.log(error)
        return [];
    }
};

export const getProductsDetails=async(id)=>{
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/products/${id}`);
        if(!res.ok) throw new Error('faild to fatch products details data');
        return res.json();
    }catch(error){
        console.log(error);
        return null ;
    }
}