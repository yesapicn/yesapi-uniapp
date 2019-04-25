//接口链接为http://api.okayapi.com/docs.php?api=App.Common_IDCard
<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="parseOkay()">
			<view class="uni-title uni-common-pl">仅用于开发和测试，不得用于商业用途。</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							请输入身份证卡号
						</view>
						<view class="uni-list-cell-db">
							<input v-model="id_number" class="uni-input" type="text" placeholder="卡号" name="title"></input>
						</view>
					</view>
				</view>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							年龄为
						</view>
						<view class="uni-list-cell-db">
							<input v-model="first" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
						</view>
					</view>
				</view>
								<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							地址位于
						</view>
						<view class="uni-list-cell-db">
							<input v-model="second" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">转换</button>
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
				title: 'Common_IDCard',
				first: '',
				id_number: '',
				second:','
			}
		},
		methods: {
			parseOkay: function() {
				var params = {
					s: "App.Common_IDCard.Parse", // 必须，待请求的接口服务名称
					id_number: this.id_number,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.first = res.data.data.info.age
						this.second = res.data.data.info.address
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
		}
	}
</script>
