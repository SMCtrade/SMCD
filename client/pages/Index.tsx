export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 border-b border-border">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded"></div>
            <span className="text-lg font-bold">TradeBot</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Signals
            </a>
            <a
              href="#"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Analytics
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm text-foreground hover:text-primary transition-colors">
            Login
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Trade smarter with bots <span className="inline-block">🤖</span>
            <span className="inline-block">📊</span>
          </h1>
          <p className="text-muted-foreground mb-8 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Real-time signals, powerful analytics,
            <br />
            and hands-free automation.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-base font-medium hover:bg-primary/90 transition-colors mb-16">
            Start now ▶
          </button>
        </div>

        {/* Chart Image */}
        <div className="flex justify-center mb-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F34af72780d254c5192a029ea5af021c6%2F8e0a1693110d44c8825332856dc5b302?format=webp&width=800"
            alt="Pixel trading chart"
            className="max-w-full h-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-24 max-w-6xl mx-auto">
          {/* Smart strategies */}
          <div className="text-center transition-transform duration-300 hover:scale-105 cursor-pointer px-4">
            <div className="w-16 h-16 mx-auto mb-4 text-2xl flex items-center justify-center">
              💡
            </div>
            <h3 className="text-lg font-bold mb-2">Smart strategies</h3>
            <p className="text-sm text-muted-foreground">
              Build and deploy custom logic
            </p>
          </div>

          {/* Fast execution */}
          <div className="text-center transition-transform duration-300 hover:scale-105 cursor-pointer px-4">
            <div className="w-16 h-16 mx-auto mb-4 text-2xl flex items-center justify-center">
              ⚡
            </div>
            <h3 className="text-lg font-bold mb-2">Fast execution</h3>
            <p className="text-sm text-muted-foreground">
              Never miss market moves
            </p>
          </div>

          {/* Multi-market */}
          <div className="text-center transition-transform duration-300 hover:scale-105 cursor-pointer px-4">
            <div className="w-16 h-16 mx-auto mb-4 text-2xl flex items-center justify-center">
              🌐
            </div>
            <h3 className="text-lg font-bold mb-2">Multi-market</h3>
            <p className="text-sm text-muted-foreground">Trade across assets</p>
          </div>

          {/* Live signals */}
          <div className="text-center transition-transform duration-300 hover:scale-105 cursor-pointer px-4">
            <div className="w-16 h-16 mx-auto mb-4 text-2xl flex items-center justify-center">
              🔔
            </div>
            <h3 className="text-lg font-bold mb-2">Live signals</h3>
            <p className="text-sm text-muted-foreground">
              Get instant trade alerts
            </p>
          </div>

          {/* Analytics */}
          <div className="text-center transition-transform duration-300 hover:scale-105 cursor-pointer px-4">
            <div className="w-16 h-16 mx-auto mb-4 text-2xl flex items-center justify-center">
              📈
            </div>
            <h3 className="text-lg font-bold mb-2">Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Visualize performance
            </p>
          </div>

          {/* Automated bots */}
          <div className="text-center transition-transform duration-300 hover:scale-105 cursor-pointer px-4">
            <div className="w-16 h-16 mx-auto mb-4 text-2xl flex items-center justify-center">
              🤖
            </div>
            <h3 className="text-lg font-bold mb-2">Automated bots</h3>
            <p className="text-sm text-muted-foreground">Run strategies 24/7</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mt-24 mb-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
            🎮 Choose your fighter
          </h2>

          <div className="border-2 border-primary bg-card rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary">
                    <th className="p-3 md:p-4 text-left border-r border-primary"></th>
                    <th className="p-3 md:p-4 text-center border-r border-primary text-foreground relative cursor-pointer group">
                      <div className="flex items-center justify-center relative">
                        <div
                          className="w-2.5 h-2.5 bg-primary border border-primary opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-200 mr-2"
                          style={{
                            clipPath:
                              "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        ></div>
                        🧠 Human trader
                      </div>
                    </th>
                    <th className="p-3 md:p-4 text-center text-primary relative cursor-pointer group">
                      <div className="flex items-center justify-center relative">
                        <div
                          className="w-2.5 h-2.5 bg-primary border border-primary opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-200 mr-2"
                          style={{
                            clipPath:
                              "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                          }}
                        ></div>
                        🤖 Bot trader
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary">
                    <td className="p-3 md:p-4 font-bold border-r border-primary">
                      Speed
                    </td>
                    <td className="p-3 md:p-4 text-center border-r border-primary">
                      🐢 Медленно
                    </td>
                    <td className="p-3 md:p-4 text-center text-primary">
                      ⚡ Мгновенно
                    </td>
                  </tr>
                  <tr className="border-b border-primary">
                    <td className="p-3 md:p-4 font-bold border-r border-primary">
                      Emotions
                    </td>
                    <td className="p-3 md:p-4 text-center border-r border-primary">
                      😡 Страх, жадность, FOMO
                    </td>
                    <td className="p-3 md:p-4 text-center text-primary">
                      ❌ Без эмоций
                    </td>
                  </tr>
                  <tr className="border-b border-primary">
                    <td className="p-3 md:p-4 font-bold border-r border-primary">
                      Focus
                    </td>
                    <td className="p-3 md:p-4 text-center border-r border-primary">
                      🤯 Устаёт, ошибается
                    </td>
                    <td className="p-3 md:p-4 text-center text-primary">
                      🟢 Работает 24/7
                    </td>
                  </tr>
                  <tr className="border-b border-primary">
                    <td className="p-3 md:p-4 font-bold border-r border-primary">
                      Reaction time
                    </td>
                    <td className="p-3 md:p-4 text-center border-r border-primary">
                      🐌 Задержка в решениях
                    </td>
                    <td className="p-3 md:p-4 text-center text-primary">
                      ⚙️ Мгновенная реакция
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 md:p-4 font-bold border-r border-primary">
                      Risk control
                    </td>
                    <td className="p-3 md:p-4 text-center border-r border-primary">
                      🎲 Интуиция
                    </td>
                    <td className="p-3 md:p-4 text-center text-primary">
                      📊 Стратегии и лимиты
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Choice Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-card border-2 border-primary text-foreground px-6 py-3 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 active:scale-95">
              ▶️ Choose Human
            </button>
            <button className="bg-card border-2 border-primary text-primary px-6 py-3 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 active:scale-95">
              ▶️ Choose Bot
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Left side - Copyright */}
            <div className="text-sm order-2 sm:order-1">©2024 TRADEBOT</div>

            {/* Center - Logo */}
            <div className="flex flex-col items-center order-1 sm:order-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <div className="text-xs">
                <span className="text-white">EN</span> |{" "}
                <span className="text-gray-400">RU</span>
              </div>
            </div>

            {/* Right side - Social icons */}
            <div className="flex space-x-4 order-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F34af72780d254c5192a029ea5af021c6%2Fd7b17742f17b43298c83f33220e6c47a?format=webp&width=800"
                  alt="Facebook"
                  className="w-6 h-6"
                  style={{ filter: "invert(1) brightness(1)" }}
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F34af72780d254c5192a029ea5af021c6%2F1db077d015b84323aa0e67242acdb9ab?format=webp&width=800"
                  alt="Instagram"
                  className="w-6 h-6"
                  style={{ filter: "invert(1) brightness(1)" }}
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F34af72780d254c5192a029ea5af021c6%2F8fc62c5eaff74bf4a60f5aaa75f98972?format=webp&width=800"
                  alt="Twitter"
                  className="w-6 h-6"
                  style={{ filter: "invert(1) brightness(1)" }}
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F34af72780d254c5192a029ea5af021c6%2Fd83e8e20773f47c79e425395c3bbb87d?format=webp&width=800"
                  alt="LinkedIn"
                  className="w-6 h-6"
                  style={{ filter: "invert(1) brightness(1)" }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
