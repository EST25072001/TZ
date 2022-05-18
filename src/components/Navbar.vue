<template>
	<div id="app">
		<v-app id="inspire">
			<v-container>
				<v-data-table
					:headers="headers"
					:items="users"
					sort-by="status"
					class="elevation-1"
				>
					<template v-slot:top>
						<v-toolbar flat>
							<v-toolbar-title>Телефонный справочник</v-toolbar-title>
							<v-divider class="mx-4" inset vertical></v-divider>
							<v-spacer></v-spacer>
							<v-dialog v-model="dialog" max-width="500px">
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										color="primary"
										dark
										class="mb-2"
										v-bind="attrs"
										v-on="on"
									>
										Добавить пользователя
									</v-btn>
								</template>
								<v-card>
									<v-card-title>
										<span class="text-h5">{{ formTitle }}</span>
									</v-card-title>

									<v-card-text>
										<v-container>
											<v-row>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.name"
														label="Телефон"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.status"
														label="Статус"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.provider"
														label="Поставщик"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.sender"
														label="Отправитель"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.place"
														label="Место отправки"
													></v-text-field>
												</v-col>
											</v-row>
										</v-container>
									</v-card-text>

									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="blue darken-1" text @click="close">
											Закрыть
										</v-btn>
										<v-btn color="blue darken-1" text @click="save">
											Сохранить
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
							<v-dialog v-model="dialogDelete" max-width="500px">
								<v-card>
									<v-card-title class="text-h5"
										>Подтвердить удаление?</v-card-title
									>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="blue darken-1" text @click="closeDelete"
											>Отменить</v-btn
										>
										<v-btn color="blue darken-1" text @click="deleteItemConfirm"
											>Удалить</v-btn
										>
										<v-spacer></v-spacer>
									</v-card-actions>
								</v-card>
							</v-dialog>
						</v-toolbar>
					</template>
					<template v-slot:item.actions="{ item }">
						<v-icon small class="mr-2" @click="editItem(item)">
							mdi-pencil
						</v-icon>
						<v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
					</template>
					<template v-slot:no-data>
						<v-btn color="primary" @click="initialize">
							Обновить список пользователей
						</v-btn>
					</template>
				</v-data-table>
			</v-container>
		</v-app>
	</div>
</template>
<script>
export default {
	name: 'my-navbar',
	data: () => ({
		dialog: false,
		dialogDelete: false,
		slots: ['По алфавиту', 'По дате', 'По ревальвентности'],
		headers: [
			{
				text: 'Телефоны',
				align: 'start',
				sortable: false,
				value: 'name',
			},
			{ text: 'Статус', value: 'status' },
			{ text: 'Поставщик', value: 'provider' },
			{ text: 'Отправитель', value: 'sender' },
			{ text: 'Место отправки', value: 'place' },
			{ text: 'Действия', value: 'actions', sortable: false },
		],
		users: [],
		editedIndex: -1,
		editedItem: {
			name: '',
			status: '',
			provider: '',
			sender: '',
			place: '',
		},
		defaultItem: {
			name: '',
			status: '',
			provider: '',
			sender: '',
			place: '',
		},
	}),

	computed: {
		formTitle() {
			return this.editedIndex === -1 ? 'Создать' : 'Редактировать'
		},
	},

	watch: {
		dialog(val) {
			val || this.close()
		},
		dialogDelete(val) {
			val || this.closeDelete()
		},
	},

	created() {
		this.initialize()
	},

	methods: {
		initialize() {
			this.users = [
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
				{
					name: 89067535467,
					status: 'Активный',
					provider: 'ООО СГМК-ТРЕЙД',
					sender: 'ООО ЭКОМЕТ',
					place: 'г. Новокузнецк',
				},
			]
		},

		editItem(item) {
			this.editedIndex = this.users.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialog = true
		},

		deleteItem(item) {
			this.editedIndex = this.users.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialogDelete = true
		},

		deleteItemConfirm() {
			this.users.splice(this.editedIndex, 1)
			this.closeDelete()
		},

		close() {
			this.dialog = false
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
			})
		},

		closeDelete() {
			this.dialogDelete = false
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
			})
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.users[this.editedIndex], this.editedItem)
			} else {
				this.users.push(this.editedItem)
			}
			this.close()
		},
	},
}
</script>
