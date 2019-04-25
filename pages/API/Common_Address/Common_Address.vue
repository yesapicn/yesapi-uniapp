//接口链接为http://api.okayapi.com/docs.php?service=Ext.Pinyin.Abbr&detail=1&type=fold


<template>
	<view>
		<page-head :title="title"></page-head>
		<view>
			<view class="uni-hello-text uni-common-pb uni-page-head-title" style="display: table-cell;">
				<view style="display: inline;float: left;font-size: 20px;font-weight: bold;">汉字拼音首字母接口</view>
				<view style="float: left;display: inline;">获取首字符字符串</view>
			</view>
			<form @submit="abbrOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入汉字
						</view>
						<view class="uni-list-cell-db">
							<input @input="abbrOkay()" v-model="abbr" class="uni-input" type="text" placeholder="请输入汉字名称" name="title"></input>
						</view>
					</view>
				</view>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							首字母为
						</view>
						<view class="uni-list-cell-db">
							<input v-model="first" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">转换</button>
					</view>
				</view>
			</form>
			<form @submit="convertOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入汉字
						</view>
						<view class="uni-list-cell-db">
							<input @input="convertOkay()" v-model="convert" class="uni-input" type="text" placeholder="请输入汉字名称" name="title"></input>
						</view>
					</view>
				</view>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							拼音为
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
			<form @submit="nameOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入汉字
						</view>
						<view class="uni-list-cell-db">
							<input @input="nameOkay()" v-model="name" class="uni-input" type="text" placeholder="请输入汉字名称" name="title"></input>
						</view>
					</view>
				</view>
			
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							姓名拼音
						</view>
						<view class="uni-list-cell-db">
							<input v-model="third" class="uni-input" type="text" placeholder="请输入姓名" name="title" disabled></input>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">转换</button>
					</view>
				</view>
			</form>
			<form @submit="sentenceOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入整句
						</view>
						<view class="uni-list-cell-db">
							<input @input="sentenceOkay()" v-model="sentence" class="uni-input" type="text" placeholder="请输入整个句子" name="title"></input>
						</view>
					</view>
				</view>
			
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							汉文拼音
						</view>
						<view class="uni-list-cell-db">
							<input v-model="fourth" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
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
				title: 'QrCode',
				first: '',
				abbr: '',
				second: '',
				convert: '',
				third: '',
				name: '',
				fourth: '',
				sentence: '',
			}
		},
		methods: {
			abbrOkay: function() {
				var params = {
					s: "Ext.Pinyin.Abbr", // 必须，待请求的接口服务名称
					text: this.abbr,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.first = res.data.data.pinyin
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			convertOkay: function() {
				var params = {
					s: "Ext.Pinyin.Convert", // 必须，待请求的接口服务名称
					text: this.convert,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.second = res.data.data.pinyin
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			nameOkay: function() {
				var params = {
					s: "Ext.Pinyin.Name", // 必须，待请求的接口服务名称
					text: this.name,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.third = res.data.data.pinyin
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			sentenceOkay: function() {
				var params = {
					s: "Ext.Pinyin.Sentence", // 必须，待请求的接口服务名称
					text: this.sentence,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.fourth = res.data.data.pinyin
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
