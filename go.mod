module github.com/couchbaselabs/showfast

go 1.16

require (
	github.com/couchbase/gocb v1.6.7
	github.com/couchbase/gocb/v2 v2.2.3 // indirect
	github.com/couchbase/gocbcore/v9 v9.1.4 // indirect
	github.com/couchbaselabs/gocbconnstr v1.0.5 // indirect
	github.com/gin-gonic/gin v0.0.0-20161012145106-3900df04d2a8
	github.com/golang/protobuf v0.0.0-20161012205335-98fa35717058 // indirect
	github.com/manucorporat/sse v0.0.0-20160126180136-ee05b128a739 // indirect
	github.com/mattn/go-colorable v0.0.5 // indirect
	github.com/mattn/go-isatty v0.0.0-20151211000621-56b76bdf51f7 // indirect
	github.com/opentracing/opentracing-go v1.2.0 // indirect
	golang.org/x/net v0.0.0-20210510120150-4163338589ed // indirect
	gopkg.in/couchbase/gocbcore.v7 v7.1.18 // indirect
	gopkg.in/couchbaselabs/gocbconnstr.v1 v1.0.4 // indirect
	gopkg.in/couchbaselabs/jsonx.v1 v1.0.0 // indirect
	gopkg.in/go-playground/validator.v8 v8.18.1 // indirect
	gopkg.in/inconshreveable/log15.v2 v2.0.0-20150921213854-b105bd37f74e
)

replace github.com/couchbase/gocb/v2 => gopkg.in/couchbase/gocb.v2 v2.2.3
