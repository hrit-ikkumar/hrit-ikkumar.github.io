	// @hritikkumar
	// #CodeChef
	// Problem Name: Chef and An Ideal Problem (CHFIDEAL)
    #pragma GCC optimize("Ofast")
    #pragma GCC optimization("O3")
    #pragma GCC optimization("unroll-loops")
    #pragma GCC target("avx,avx2,fma")
	#include<iostream> //IO Stream Header File
	#include<cmath> //Math functions
	#include<algorithm> //Algorithm header file
	#include<cstdlib> //stdlib library of c
	#include<iomanip>
	#include<vector>
	#include<map>
	#include<set>
	#include<stack>
	#include<queue>
	#include<iterator>
	#include<bits/stdc++.h> //Standard c++ header file

	#define mod 1000000007
	#define pb push_back
	#define mp make_pair
	#define fs first
	#define sc second

	typedef long long ll;
	typedef long double ld;

	#define pll pair<ll, ll>
	#define vll vector<ll, ll>
	#define vvll vector<vll>
	#define vpll vector<pll>
	#define vvpll vector<vpll>


	#define fast ios_base::sync_with_stdio(false);cin.tie(0);cout.tie(0)


	#define test(t) ll t;cin>>t;while(t--)

	#define mem(a,b) memset(a,b,sizeof(a))

	#define inn freopen("input.txt", "r", stdin)
	#define outt freopen("output.txt", "w",stdout)

	#define all(arr) arr.begin(),arr,end()
	#define fi0(i,n) for(ll i = 0;i<(n);++i)
	#define fiabi(i,a,b) for(ll i = a; i<=b;++i)
	#define fiabd(i,a,b) for(ll i = a; i>=b;--i)

	#define minab(a,b) (a = min((a), (b)))
	#define maxab(a,b) (a = max((a), (b)))
	#define ret0 return 0
	#define ret return
	//long long int moduls = 10;
	using namespace std; //namespace created as std
	

	int main(void)
	{
		int x,y,z;
		x = (rand()%3) + 1;
		cout<<x<<endl<<flush;
		cin>>y;
		while(1){
			z=(rand()%3) + 1;
			if(z!=x && z!=y){
				cout<<z<<endl<<flush;
				break;
			}
		}
		ret0; //return type is int
	}