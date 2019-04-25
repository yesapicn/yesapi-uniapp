//接口链接为http://api.okayapi.com/docs.php?api=App.Common_Password
<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-mt uni-common-pl">随机昵称</view>
		<view class="uni-list">
			<radio-group @change="radioChange" @click="passwordOkay()">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>

		<view class="uni-title">最小值</view>
		<view>
			<slider @change="sliderChange" v-model="min_len" min="1" max="50" show-value />
		</view>

		<view class="uni-title">最大值</view>
		<view>
			<slider @change="sliderChangeMax" v-model="max_len" min="1" max="50" show-value />
		</view>

		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					随机密码
				</view>
				<view class="uni-list-cell-db">
					<input v-model="first" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
				</view>
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button type="primary" formType="submit" @click="passwordOkay()">转换</button>
			</view>
		</view>
	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			return {
				title: 'Common_Password',
				items: [{
						value: 'default',
						name: '默认'
					},
					{
						value: 'number',
						name: '较低',
					},
					{
						value: 'normal',
						name: '正常',
					},
					{
						value: 'strong',
						name: '强',
					},
					{
						value: 'extreme',
						name: '极强',
					},
				],
				min_len: 6,
				max_len: 10,
				current: 0,
				first: '',
			}
		},
		methods: {
			passwordOkay: function() {
				var params = {
					s: "App.Common_Password.RandOne", // 必须，待请求的接口服务名称
					level: this.items[this.current].value,
					min_len: this.min_len,
					max_len: this.max_len,
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						console.log(res);
						this.first = res.data.data.password
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			sliderChange(e) {
				this.min_len = e.detail.value;
				this.passwordOkay();
			},
			sliderChangeMax(e) {
				this.max_len = e.detail.value;
				this.passwordOkay();
			},
		}
	}
</script>
