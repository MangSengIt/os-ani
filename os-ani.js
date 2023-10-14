!(function () {
    try {
        // 获取元素以及参数
        let chartContainer = document.getElementById("os-container")
        if (!chartContainer) {
            return console.error("开屏动画启动失败，未找到#os-container元素")
        }
        const text = chartContainer.getAttribute("data-text") || "HELLO OS-ANI"
        const duration = chartContainer.getAttribute("data-duration") || 3000
        const delay = chartContainer.getAttribute("data-delay") || 2000
        const stroke = chartContainer.getAttribute("data-stroke") || "#fff"
        const fontSize = chartContainer.getAttribute("data-font-size") || "120px"
        const background = chartContainer.getAttribute("data-background") || "#000"
        const remover = chartContainer.hasAttribute("remover")

        // 设置样式
        const __private_css = `
        #os-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 99999999;
            box-sizing: border-box;
            overflow: hidden;
            background-color: ${background};
            animation: os-alter-hide ${delay - 400}ms ease-in-out forwards ${
            duration - 0 + 400
        }ms;
        }
        @keyframes os-alter-hide {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }`
        document.head.insertAdjacentHTML("beforeend", `<style>${__private_css}</style>`)

        // 创建echarts
        const myChart = echarts.init(chartContainer, "transparent", {
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
            if (!remover) return
            setTimeout(
                () => chartContainer.parentNode.removeChild(chartContainer),
                delay
            )
        })
        // window.addEventListener("resize", myChart.resize)
    } catch (error) {
        throw new Error(error)
    }
})()
