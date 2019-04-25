//接口链接为http://api.okayapi.com/docs.php?api=App.Music


<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-pl">仅用于开发和测试，不得用于商业用途。</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :range="arrays">
						<view class="uni-input">{{array[index]['name']}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view>
			<form @submit="searchOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入歌曲名称
						</view>
						<view class="uni-list-cell-db">
							<input v-model="input" class="uni-input" type="text" placeholder="请输入歌名" name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">搜索</button>
					</view>
				</view>
				<view v-for="(item,key) in music" :key="key">
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								{{item.author}}
							</view>
							<view class="uni-list-cell-db">
								<input v-model="item.title" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
							</view>
						</view>
					</view>
					<view class="page-section page-section-gap" style="text-align: center;">
						<audio style="text-align: left" :src="item.url" :poster="item.pic" :name="item.title" :author="item.author"
						 controls></audio>
					</view>

					<view style="margin-bottom: 20px;">
					</view>
				</view>

			</form>
		</view>
	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			return {
				title: 'Music',
				music: [],
				input: '',
				page: 1,
				filter: 'name',
				website: 'netease',
				array: [{
						name: '网易音乐',
						value: 'netease'
					},
					{
						name: 'qq音乐',
						value: 'qq'
					},
					{
						name: '酷狗音乐',
						value: 'kuguo'
					},
					{
						name: '酷我音乐',
						value: 'kuwo'
					},
					{
						name: '百度音乐',
						value: 'baidu'
					},
					{
						name: '虾米音乐',
						value: 'xiami'
					},
					{
						name: '一听音乐',
						value: 'yiting'
					},
					{
						name: '咪咕音乐',
						value: 'migu'
					},
				],
				arrays: [
					'网易音乐',
					'qq音乐',
					'酷狗音乐',
					'酷我音乐',
					'百度音乐',
					'虾米音乐',
					'一听音乐',
					'咪咕音乐',
				],
				index: 0,
			}
		},
		methods: {
			searchOkay: function() {
				this.music = []
				this.page = 1
				uni.showLoading({
					title: '加载中'
				})
				var params = {
					s: "App.Music.Search", // 必须，待请求的接口服务名称
					input: this.input,
					filter: this.filter,
					website: this.website,
					page: this.page,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.music = res.data.data.music
						this.page++
						uni.hideLoading()
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			addOkay: function() {
				uni.showLoading({
					title: '加载中'
				})
				var params = {
					s: "App.Music.Search", // 必须，待请求的接口服务名称
					input: this.input,
					filter: this.filter,
					website: this.website,
					page: this.page,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.music = this.music.concat(res.data.data.music)
						this.page++
						uni.hideLoading()
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
				this.website = this.array[this.index]['value']
				console.log(this.website)
			},
			onReachBottom() {
				this.addOkay();
				uni.showLoading({
					title: '加载中'
				})
			}
		}
	}
</script>
