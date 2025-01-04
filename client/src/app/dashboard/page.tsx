"use client";

import {
  Check,
  Package,
  Tag,
  TrendingDown,
  TrendingUpIcon,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Costumer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            iconComponent: TrendingUpIcon,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            iconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<Check className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title: "Dues",
            amount: "250.00",
            changePercentage: 131,
            iconComponent: TrendingUpIcon,
          },
          {
            title: "Pending Orders",
            amount: "147.00",
            changePercentage: -56,
            iconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2024"
        details={[
          {
            title: "Sales",
            amount: "1000.00",
            changePercentage: 20,
            iconComponent: TrendingUpIcon,
          },
          {
            title: "Discount",
            amount: "200.00",
            changePercentage: -10,
            iconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
