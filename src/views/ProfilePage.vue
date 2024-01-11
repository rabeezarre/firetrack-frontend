<template>
  <div class="profile-page container mt-4">
    <div class="row">
      <!-- User Details (Left Side) -->
      <div class="col-md-6">
        <h2>User Profile</h2>
        <div v-if="user" class="profile-info">
          <template v-for="field in userFields" :key="field.key">
            <p><strong>{{ field.label }}:</strong> {{ user[field.key] }}</p>
          </template>
          <button @click="confirmDelete" class="btn btn-danger">Delete Account</button>
        </div>
        <div v-else class="no-history">
          <p>User data is not available.</p>
        </div>
      </div>

      <!-- Scanning History (Right Side) -->
      <div class="col-md-6">
        <h2>Scanning History</h2>
        <div v-if="displayedHistory.length > 0">
          <ul class="scanning-history-list">
            <li v-for="scan in displayedHistory" :key="scan.historyId" class="scanning-history-item">
              <p><strong>Point {{ scan.pointId }}:</strong> {{ formatDate(scan.timestamp) }}</p>
            </li>
          </ul>
          <button v-if="displayedHistory.length < scanningHistory.length" @click="showMore" class="btn btn-primary">Show More</button>
        </div>
        <div v-else class="no-history">
          <p>No scanning history available.</p>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div class="modal" tabindex="-1" role="dialog" v-if="showDeleteModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Deletion</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeDeleteModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete your account?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeDeleteModal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="deleteAccount">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import router from "@/router";

export default defineComponent({
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const scanningHistory = ref([]);
    const displayedHistory = ref([]);
    const showDeleteModal = ref(false);
    const limit = 5;

    const userFields = [
      { key: 'email', label: 'Email' },
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'position', label: 'Position' },
    ];

    const confirmDelete = () => {
      showDeleteModal.value = true;
    };

    const closeDeleteModal = () => {
      showDeleteModal.value = false;
    };

    const deleteAccount = async () => {
      try {
        await axios.delete(`${process.env.VUE_APP_API_URL}/users/${user.value.userId}`);
        store.dispatch('logoutUser');
        router.push('/');
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    };

    const fetchScanningHistory = async () => {
      try {
        const response = await axios.get(
            `${process.env.VUE_APP_API_URL}/scanningHistory/user/${user.value.userId}`
        );
        scanningHistory.value = response.data.reverse();
        displayedHistory.value = scanningHistory.value.slice(0, limit);
      } catch (error) {
        console.error('Error fetching scanning history:', error);
      }
    };

    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    const showMore = () => {
      const nextSize = Math.min(scanningHistory.value.length, displayedHistory.value.length + limit);
      displayedHistory.value = scanningHistory.value.slice(0, nextSize);
    };

    onMounted(() => {
      fetchScanningHistory();
    });

    return {
      user,
      userFields,
      scanningHistory,
      displayedHistory,
      showDeleteModal,
      confirmDelete,
      closeDeleteModal,
      deleteAccount,
      formatDate,
      showMore,
    };
  },
});
</script>

<style scoped lang="scss">
.profile-page {
  padding: 20px;
}

.profile-info {
  margin-bottom: 20px;
}

.scanning-history-list {
  list-style: none;
  padding: 0;

  .scanning-history-item {
    margin: 10px 0;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;

    p {
      margin: 5px 0;
    }
  }
}

.no-history {
  text-align: center;
  margin-top: 20px;
  color: #999;
}

.modal {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.modal-dialog {
  background-color: #fff;
  border-radius: 10px;
}

.modal-content {
  border: none;
}

.modal-footer {
  justify-content: space-between;
}
</style>
