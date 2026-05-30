export const getSearchProducts = async (search = "", page = 1) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/products?search=${search}&page=${page}`,
    );
    if (!res.ok) throw new Error("faild to fatch search products data");
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProductsDetails = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/products/${id}`,
    );
    if (!res.ok) throw new Error("faild to fatch products details data");
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/products`);
    if (!res.ok) throw new Error("faild to fatch products  data");
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// this is for post

export const getBookingProducts = async (data) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("faild to fetch booking add to cart");
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAddToCartData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/cart`);
    if (!res.ok) throw new Error("faild to fetch add to cart data");
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCartProductDelete = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/cart/${id}`,
      {
        method: "DELETE",
      },
    );
    if (!res.ok) throw new Error("faild to fetch delete to cart data");
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCartProductEdit = async (data, id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/cart/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("faild to fetch edit cart data");
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
