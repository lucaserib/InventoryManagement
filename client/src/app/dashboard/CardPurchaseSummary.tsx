import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  return (
    <div className="flex flex-col justify-between row-span-3 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Card Purchase Summary
            </h2>
            <hr />
          </div>

          {/* BODY */}
          <div>
            {/* BODY HEADER */}
            <div className="mb-4 mt-7 px-7">
              <p className="text-xs text-gray-400">Purchased</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {lastDataPoint
                    ? new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(lastDataPoint.totalPurchased)
                    : "R$0,00"}
                </p>
              </div>
              {lastDataPoint && (
                <p
                  className={`text-sm ${
                    lastDataPoint.changePercentage! >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  } flex ml-3`}
                >
                  {lastDataPoint.changePercentage! >= 0 ? (
                    <TrendingUp className="w-5 h-5 mr-1" />
                  ) : (
                    <TrendingDown className="w-5 h-5 mr-1" />
                  )}
                  {Math.abs(lastDataPoint.changePercentage!)}%
                </p>
              )}
            </div>
          </div>

          {/* CHARTS */}
          <ResponsiveContainer width="100%" height={100} className="p-2">
            <AreaChart
              data={purchaseData}
              margin={{ top: 0, right: 0, left: -50, bottom: 0 }}
            >
              <XAxis dataKey="date" tick={false} axisLine={false} />
              <YAxis tick={false} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value: number) => [
                  `$${value.toLocaleString("pt-BR")}`,
                ]}
                labelFormatter={(label) => {
                  const date = new Date(label);
                  return date.toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                }}
              />
              <Area
                type="linear"
                dataKey="totalPurchased"
                stroke="#8884d8"
                fill="#8884d8"
                dot={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;
