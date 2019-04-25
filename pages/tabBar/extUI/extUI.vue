//接口链接为http://api.okayapi.com/docs.php?service=App.Table.FreeQuery&detail=1&type=fold

<template>
	<view class="page">
		<view class="uni-header-logo" style="width: 80%;margin: auto;">
			<image src="http://cdn7.okayapi.com/CEE4B8A091578B252AC4C92FB4E893C3_20190304213902_63f85e982adc8419feffd862e883581e.jpeg"
			 mode="aspectFit"></image>
		</view>
		<view class="uni-common-pl">演示用小白接口如何调用模型的数据（下列数据来自模型uniapp，具体可通过教程部署)</view>
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
					<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
					<text class="uni-product-tip">{{product.tip}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';

	export default {
		data() {
			return {
				title: 'product-list',
				productList: [],
				renderImage: false
			};
		},
		methods: {
			loadData(action = 'add') {
				var params = {
					s: "App.Table.FreeQuery", // 必须，待请求的接口服务名称
					model_name: 'uniapp',
					where: '[["id", ">", "1"]]',
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.productList = this.productList.concat(res.data.data.list)
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});

			}
		},
		onLoad() {
			this.loadData();
			setTimeout(() => {
				this.renderImage = true;
			}, 300);
		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			this.loadData();
		}
	};
</script>

<style>

</style>
