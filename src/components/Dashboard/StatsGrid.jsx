import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { DollarSign, Users, ShoppingCart, Eye } from 'lucide-react'

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+13.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-900/20",
    textColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+5.2%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10 dark:bg-blue-900/20",
    textColor: "text-blue-500 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "567",
    change: "+2.3%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10 dark:bg-amber-900/20",
    textColor: "text-amber-500 dark:text-amber-400",
  },
  {
    title: "Page Views",
    value: "12,345",
    change: "-1.2%",
    trend: "down",
    icon: Eye,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500/10 dark:bg-pink-900/20",
    textColor: "text-pink-500 dark:text-pink-400",
  },
]

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        return (
          <div
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-600/50 transition-all duration-300 group"
            key={index}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-300">
                  {stat.title}
                </p>

                <p className="text-2xl font-bold text-slate-600 dark:text-white mb-4">
                  {stat.value}
                </p>

                <div className="flex items-center space-x-2">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    vs Last Month
                  </span>
                </div>
              </div>

              <div
                className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-200 ${stat.bgColor}`}
              >
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r rounded-full transition-all duration-500 ${stat.color}`}
                style={{ width: stat.trend === "up" ? "75%" : "45%" }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsGrid