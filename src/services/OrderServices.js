import requests from "./httpServices";

const OrderServices = {
  addOrder: async (body, headers) => {
    return requests.post("/order/add", body, headers);
  },

  initiateNoonPayment: async (body) => {
    return requests.post("/noon/initiate", body);
  },

  getNoonPaymentStatus: async ({ merchantReference, orderId }) => {
    const query = new URLSearchParams();
    if (merchantReference) query.append("merchantReference", merchantReference);
    if (orderId) query.append("orderId", orderId);
    return requests.get(`/noon/status?${query.toString()}`);
  },

  getOrderCustomer: async ({ page = 1, limit = 8 }) => {
    return requests.get(`/order?limit=${limit}&page=${page}`);
  },
  getCustomerAuctions: async ({ id }) => {
    return requests.get(`/auctions/userWonBids/${id}`);
  },
  getOrderById: async (id) => {
    return requests.get(`/order/${id}`);
  },
};

export default OrderServices;
