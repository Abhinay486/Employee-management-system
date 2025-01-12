#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n; 
        vector<int> arr(n);
        int sum = 0;

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
            sum += arr[i];
        }

        int x = n + 1; 
        int res = (x * 100) / 2;

        int ans = res - sum;

        if (ans > 100) {
            cout << "-1" << endl;
        } else if (ans <= 0) {
            cout << "0" << endl; 
        } else {
            cout << ans << endl;
        }
    }
    return 0;
}
