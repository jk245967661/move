<template>
  <div class="hello">
    <div class="move-header">
      电影列表
    </div>
    <ul class="move-list">
      <li v-for="item in items">
        <router-link :to="{name: 'MoveDetails', params: {id: item.id}}">
          <div class="container">
            <div class="col-xs-3 row">
              <img :src="item.images.medium" width="100%" height="100%">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-4 text-r">
                  导演：
                </div>
                <div class="col-xs-8 row" v-for="director in item.directors">
                  {{ director.name }}
                </div>
              </div>

              <div class="row">
                <div class="col-xs-4 text-r">
                  主演：
                </div>
                <div class="col-xs-8 row move-list-div">
                  <span v-for="yyname in item.casts">
                    {{ yyname.name }}/
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-4 text-r">
                  类型：
                </div>
                <div class="col-xs-8 row">
                  <span v-for="typeofs in item.genres">
                    {{ typeofs }}
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-4 text-r">
                  年份：
                </div>
                <div class="col-xs-8 row">
                  {{ item.year }}
                </div>
              </div>

            </div>
          </div>
        </router-link>
      </li>
    </ul>

    <div class="move-more-btn" v-on:click="listdata(quantity)">
      加载更多···
    </div>

  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      items: [],
      quantity: 5
    }
  },
  mounted: function () {
    this.listdata(this.quantity)
  },
  methods: {
    listdata: function (id) {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=' + id, {
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.items = response.data.subjects
        this.quantity = id + 5
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-size: 12px;
}
h1, h2 {
  font-weight: normal;
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
  margin: 15px 0 35px;
}

.move-list-div {
  display:block;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.move-more-btn {
  width: 100%;
  padding: 5px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  background: #eee;
}

.text-r {
  text-align: right;
}
</style>
