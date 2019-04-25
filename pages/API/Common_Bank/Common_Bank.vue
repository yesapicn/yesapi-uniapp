//接口链接为http://api.okayapi.com/docs.php?service=App.Common_Bank.QueryCard&detail=1&type=fold

<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<form @submit="queryCardOkay()">
			<view class="uni-title uni-common-pl">仅用于开发和测试，不得用于商业用途。</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							请输入银行卡号
						</view>
						<view class="uni-list-cell-db">
							<input v-model="card_number" class="uni-input" type="text" placeholder="卡号" name="title"></input>
						</view>
					</view>
				</view>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							银行名称为
						</view>
						<view class="uni-list-cell-db">
							<input v-model="first" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
						</view>
					</view>
				</view>
								<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							卡类型为
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
				title: 'Common_Bank',
				first: '',
				card_number: '',
				second:','
			}
		},
		methods: {
			queryCardOkay: function() {
				var params = {
					s: "App.Common_Bank.QueryCard", // 必须，待请求的接口服务名称
					card_number: this.card_number,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.first = res.data.data.info.bankName
						this.second = res.data.data.info.cardTypeName
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
