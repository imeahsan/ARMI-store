import requests from "./httpServices";

const OrderServices = {
  addOrder: async (body, headers) => {
    return requests.post("/order/add", body, headers);
  },

  initiateNoonPayment: async (body) => {
    return requests.post("/noon/initiate", body);
  },

  getNoonPaymentStatus: async (orderId) => {
    return requests.get(`/noon/status/${orderId}`);
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
