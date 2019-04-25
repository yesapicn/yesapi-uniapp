//接口链接为http://api.okayapi.com/docs.php?api=App.Common_Faker
<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-pl">模拟数据类型</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title">总数</view>
		<view>
			<slider @change="sliderChange" v-model="total" min="1" max="50" show-value />
		</view>

		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left" style="margin-bottom: 10px;">
					模拟数据如下
				</view>
			</view>
		</view>

		<view v-if="ifImageUrl">
			<view v-for='(item,key) in imageUrl' :key="key">
				<view style="">
					<image :src="item" lazy-load="true" style="display:block; margin:auto;margin-bottom: 10px;"></image>
				</view>
			</view>
		</view>

		<view v-if="ifAddress">
			<view v-for='(item,key) in address' :key="key">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left" style="margin-bottom: 10px;">
							{{key + 1}}.{{item}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view v-if="ifPhoneNumber">
			<view v-for='(item,key) in phoneNumber' :key="key">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left" style="margin-bottom: 10px;">
							{{key + 1}}.{{item}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view v-if="ifHexcolor">
			<view v-for='(item,key) in hexcolor' :key="key">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left" style="margin-bottom: 10px;" :style="'color:'+item">
							{{key + 1}}.{{item}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-btn-v">
				<button type="primary" formType="submit" @click="fakerOkay()">转换</button>
			</view>
		</view>
	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			return {
				title: 'Common_Faker',
				array: [
					'模拟图片',
					'模拟地址',
					'模拟电话',
					'模拟颜色',
				],
				total: 6,
				index: 0,
				current: 0,
				imageUrl: {},
				ifImageUrl: false,
				address: {},
				ifAddress: false,
				phoneNumber: {},
				ifPhoneNumber: false,
				hexcolor: {},
				ifHexcolor: false,
				first: '',
			}
		},
		methods: {
			fakerOkay: function() {
				if (this.array[this.index] == '模拟图片') {
					var params = {
						s: "App.Common_Faker.Image", // 必须，待请求的接口服务名称
						total: this.total,
					};
					uni.request({
						url: this.okayapiHost,
						method: 'GET',
						data: okayapi.enryptData(params),
						success: res => {
							console.log(res)
							this.imageUrl = res.data.data.items.imageUrl
							this.ifImageUrl = true
						},
						fail: res => {
							console.log(res);
						},
						complete: () => {}
					});
				} else {
					if (this.array[this.index] == '模拟地址') {
						var params = {
							s: "App.Common_Faker.Address", // 必须，待请求的接口服务名称
							total: this.total,
						};
						uni.request({
							url: this.okayapiHost,
							method: 'GET',
							data: okayapi.enryptData(params),
							success: res => {
								console.log(res);
								this.address = res.data.data.items.address
								this.ifAddress = true
							},
							fail: res => {
								console.log(res);
							},
							complete: () => {}
						});
					} else {
						if (this.array[this.index] == '模拟电话') {
							var params = {
								s: "App.Common_Faker.Phonenumber", // 必须，待请求的接口服务名称
								total: this.total,
							};
							uni.request({
								url: this.okayapiHost,
								method: 'GET',
								data: okayapi.enryptData(params),
								success: res => {
									console.log(res);
									this.phoneNumber = res.data.data.items.phoneNumber
									this.ifPhoneNumber = true
								},
								fail: res => {
									console.log(res);
								},
								complete: () => {}
							});
						} else {
							if (this.array[this.index] == '模拟颜色') {
								var params = {
									s: "App.Common_Faker.Color", // 必须，待请求的接口服务名称
									total: this.total,
								};
								uni.request({
									url: this.okayapiHost,
									method: 'GET',
									data: okayapi.enryptData(params),
									success: res => {
										console.log(res);
										this.hexcolor = res.data.data.items.hexcolor
										this.ifHexcolor = true
									},
									fail: res => {
										console.log(res);
									},
									complete: () => {}
								});
							}
						}
					}
				}

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
				this.total = e.detail.value;
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
				this.imageUrl = {}
				this.ifImageUrl = false
				this.address = {}
				this.ifAddress = false
				this.phoneNumber = {}
				this.ifPhoneNumber = false
				this.hexcolor = {}
				this.ifHexcolor = false

				this.fakerOkay()
			},
		}
	}
</script>
