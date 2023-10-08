!(function () {
    try {
        // 获取元素以及参数
        let chartContainer = document.getElementById("os-container")
        if (!chartContainer) {
            return console.error("开屏动画启动失败，未找到#os-container元素")
        }
        const text = chartContainer.getAttribute("data-text") || "HELLO OS-ANI"
        const duration = chartContainer.getAttribute("data-delay") || 3000
        const stroke = chartContainer.getAttribute("data-stroke") || "#fff"
        const fontSize = chartContainer.getAttribute("data-font-size") || "120px"

        // 设置样式
        chartContainer.style.position = "fixed"
        chartContainer.style.top = "0"
        chartContainer.style.left = "0"
        chartContainer.style.width = "100vw"
        chartContainer.style.height = "100vh"
        chartContainer.style.zIndex = "99999999"
        chartContainer.style.boxSizing = "border-box"
        chartContainer.style.overflow = "hidden"

        // 创建echarts
        const myChart = echarts.init(chartContainer, "dark", {
            renderer: "canvas",
            useDirtyRect: false,
        })
        const option = {
            animation: {
                duration,
                loop: false,
            },
            graphic: {
                elements: [
                    {
                        type: "text",
                        left: "center",
                        top: "center",
                        style: {
                            text,
                            fontSize,
                            fontWeight: "bold",
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: "transparent",
                            stroke,
                            lineWidth: 1,
                        },
                        keyframeAnimation: {
                            duration,
                            keyframes: [
                                {
                                    percent: 0.8,
                                    style: {
                                        fill: "transparent",
                                        lineDashOffset: 200,
                                        lineDash: [200, 0],
                                    },
                                },
                                {
                                    percent: 1,
                                    style: {
                                        fill: stroke,
                                    },
                                },
                                {
                                    percent: 1.2,
                                    style: {
                                        animation: "none",
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        }
        myChart.setOption(option) // 开始动画播放
        myChart.on("finished", () => {
            chartContainer.parentNode.removeChild(chartContainer)
        })
        // window.addEventListener("resize", myChart.resize)
    } catch (error) {
        throw new Error(error)
    }
})()
