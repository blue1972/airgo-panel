package response

import (
	"github.com/pura-panel/airgo-panel/constant"
	"net/http"

	"github.com/gin-gonic/gin"
)

type ResponseStruct struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
	Data any    `json:"data"`
}

func Response(code int, msg string, data any, c *gin.Context) {
	c.JSON(http.StatusOK, ResponseStruct{
		code,
		msg,
		data,
	})
}
func OK(message string, data any, c *gin.Context) {
	Response(constant.RESPONSE_SUCCESS, message, data, c)
}

func Fail(message string, data any, c *gin.Context) {
	Response(constant.RESPONSE_ERROR, message, data, c)
}
func ResponseSSE(name, message string, ctx *gin.Context) {
	flusher, ok := ctx.Writer.(http.Flusher)
	if !ok {
		return
	}
	ctx.SSEvent(name, message)
	flusher.Flush()
}
