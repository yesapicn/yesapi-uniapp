<template>
	<!-- #ifndef MP-ALIPAY || MP-TOUTIAO -->
	<view>
		<template v-if="showSetTabBarPage">
			<set-tab-bar @unmount="leaveSetTabBarPage"></set-tab-bar>
		</template>
		<template v-else>
			<!-- #endif -->
			<view class="uni-padding-wrap uni-common-pb">
				<view class="uni-header-logo" style="width: 80%;margin: auto;">
					<image src="http://cdn7.okayapi.com/CEE4B8A091578B252AC4C92FB4E893C3_20190304213902_63f85e982adc8419feffd862e883581e.jpeg"
					 mode="aspectFit"></image>
				</view>
				<view class="uni-hello-text uni-common-pb">
					以下将演示uni-app调用小白接口实例，详细文档见小白接口官网
				</view>
				<view class="uni-card" v-for="(list,index) in lists" :key="index">
					<view class="uni-list">
						<view class="uni-list-cell uni-collapse">
							<view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" :class="list.open ? 'uni-active' : ''"
							 @click="triggerCollapse(index)">
								{{list.name}}
							</view>
							<view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
								<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.pages" :key="key" :url="item.url"
								 @click="goDetailPage(item.url)">
									<view class="uni-list-cell-navigate uni-navigate-right"> {{item.name}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- #ifndef MP-ALIPAY || MP-TOUTIAO -->
		</template>
	</view>
	<!-- #endif -->
</template>
<script>
	// #ifndef MP-ALIPAY || MP-TOUTIAO
	import setTabBar from '@/components/api-set-tabbar.vue';
	// #endif

	export default {
		// #ifndef MP-ALIPAY || MP-TOUTIAO
		components: {
			setTabBar
		},
		// #endif
		data() {
			const list = [{
				id: 'page',
				name: '实用',
				open: true,
				pages: [{
						name: '多站合一音乐搜索-Beta版',
						url: 'Music'
					},
					{
						name: '二维码模块',
						url: 'QrCode'
					},
					{
						name: '条形码模块',
						url: 'BarCode'
					},
					{
						name: '全国大学接口',
						url: 'Common_University'
					},
					{
						name: '随机昵称',
						url: 'Common_Nickname'
					},
					{
						name: '随机密码',
						url: 'Common_Password'
					},
					{
						name: '模拟数据Faker',
						url: 'Common_Faker'
					},
					{
						name: '日期模块',
						url: 'Common_Date'
					},
					{
						name: '每日一笑',
						url: 'Joke'
					},
					{
						name: '汉字拼音转换',
						url: 'pinyin'
					},
					{
						name: '昵称头像模块',
						url: 'Avatar'
					},
					{
						name: 'IP地址归属',
						url: 'IP'
					},
					{
						name: '银行卡信息',
						url: 'Common_Bank'
					},
					{
						name: '身份证信息',
						url: 'Common_IDCard'
					},
					{
						name: '气象云图',
						url: 'Common_Weather'
					},
					{
						name: '地区实时天气状况',
						url: 'Common_Weather_LiveWeather'
					},
					{
						name: '地区未来一周天气状况',
						url: 'Common_Weather_WeekWeather'
					},
				]
			}];
			return {
				showSetTabBarPage: false,
				lists: list
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app调用小白接口实例',
				path: '/pages/tabBar/API/API'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		onShow() {
			this.leaveSetTabBarPage()
		},
		onHide() {
			this.leaveSetTabBarPage()
		},
		methods: {
			triggerCollapse(e) {
				if (!this.lists[e].pages) {
					this.goDetailPage(this.lists[e].url);
					return;
				}
				for (var i = 0; i < this.lists.length; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[e].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				if (e === 'set-tabbar') {
					this.showSetTabBarPage = true
					return;
				}
				console.log(e);
				let url = ~e.indexOf('platform') ? e : '/pages/API/' + e + '/' + e;
				uni.navigateTo({
					url: url
				})
			},
			leaveSetTabBarPage() {
				this.showSetTabBarPage = false
			}
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}
</style>
