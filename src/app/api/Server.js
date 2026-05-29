

export const getSearchProducts=async(search='', page=1)=>{
    try{
const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/products?search=${search}&page=${page}`);
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