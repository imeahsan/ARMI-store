import requests from "./httpServices";

const AuctionServices = {
  getShowingProducts: async () => {
    return requests.get("/auctions/show");
  },
  getShowingStoreProducts: async ({ category = "", title = "", slug = "" }) => {
    return requests.get(
      `/auctions/store?category=${category}&title=${title}&slug=${slug}`
    );
  },
  getDiscountedProducts: async () => {
    return requests.get("/auctions/discount");
  },

  getProductBySlug: async (slug) => {
    return requests.get(`/auctions/auctions/${slug}`);
  },
  getBids: async (id) => {
    return requests.get(`/auctions/bids/${id}`);
  },
};

export default AuctionServices;
