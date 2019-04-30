<template>
	<div class="movedetails">
    <div class="move-header">
      电影详情
    </div>
		<!--{{ id }}-->
    <!--https://api.douban.com/v2/movie/subject/-->
    <!--{{ items }}-->
    <ul class="move-list">
      <li>
          <div class="container">
            <div class="col-xs-3 row">
              <img :src="items.image" width="100%" height="100%">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-4">
                  导演:
                </div>
                <div class="col-xs-8">
                  <div class="move-list-div" v-for="attrs in items.attrs.director">
                    {{ attrs }}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4">
                  语言:
                </div>
                <div class="col-xs-8">
                  <span v-for="language in items.attrs.language">
                    {{ language }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4">
                  制片国家:
                </div>
                <div class="col-xs-8">
                  <span v-for="country in items.attrs.country">
                    {{ country }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4">
                  上映日期:
                </div>
                <div class="col-xs-8">
                  <span v-for="pubdate in items.attrs.pubdate">
                    {{ pubdate }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4">
                  片长:
                </div>
                <div class="col-xs-8">
                  <span v-for="movie_duration in items.attrs.movie_duration">
                    {{ movie_duration }}
                  </span>
                </div>
              </div>
            </div>
          </div>
      </li>
    </ul>

    <div class="container move-introduction">
      <div class="col-xs-12">
        <span class="move-introduction-title">
          {{ items.alt_title }}剧情简介······
        </span>
      </div>
      <div class="col-xs-12 move-introduction-con">
          {{ items.summary }}
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      id: this.$route.params.id,
      items: []
    }
  },
  mounted: function () {
    this.list(this.$route.params.id)
  },
  methods: {
    list: function (id) {
      this.$http.jsonp('https://api.douban.com/v2/movie/' + id, {
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.items = response.data
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    }
  }
}
</script>

<style>
body {
    font-size: 12px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  word-wrap:break-word;
  text-align: left;
  margin: 0 0 15px 0;
}

a {
  color: #7d7d7d;
}

.active {
  width: 100px;
  height: 100px;
  background: green;
}

.move-header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #000;
  -moz-box-shadow: 0 3px 2px rgba(21, 21, 21, .6);
  box-shadow: 0 3px 2px rgba(21, 21, 21, .6);
}

.move-list {
  margin: 15px 0;
}

.move-introduction {
  margin: 20px 0 0;
}

.move-introduction-title {
  font-size: 16px;
  color: #007722;
}

.move-introduction-con {
  text-align: left;
  padding: 5px 0;
  text-indent: 2rem;
}

.move-list-div {
  display:block;
  white-space:nowrap; 
  overflow:hidden; 
  text-overflow:ellipsis;
}
</style>
