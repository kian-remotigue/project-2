
import { router } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const POSTS = [
  {
    id: "1",
    name: "Almira Dalura",
    username: "@almiradalura",
    avatar: "https://i.pravatar.cc/150?img=47",
    time: "2 hours ago",
    text: "Sometimes the best moments are the simplest ones. A beautiful sunset, a peaceful evening, and a little time for yourself.",
    image: "https://picsum.photos/id/1015/800/600",
  },
  {
    id: "2",
    name: "Kian_Dumps",
    username: "@kianremotigue",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "4 hours ago",
    text: "Just finished my first Expo app. It feels amazing to finally see something I've been working on come to life.",
  },
  {
    id: "3",
    name: "Ana Reyes",
    username: "@anareyes",
    avatar: "https://i.pravatar.cc/150?img=32",
    time: "Yesterday",
    text: "Weekend hike with friends. Fresh air, beautiful views, and memories worth keeping.",
    image: "https://picsum.photos/id/1018/800/600",
  },
  {
    id: "4",
    name: "Neil_emmerson",
    username: "@neilgalleposo",
    avatar: "https://i.pravatar.cc/150?img=15",
    time: "Yesterday",
    text: "Coffee and code make a good morning. Hope everyone is having a wonderful day.",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={s.container} edges={["top"]}>
      <View style={s.header}>
        <View>
          <Text style={s.brand}>moment<Text style={s.dot}>.</Text></Text>
          <Text style={s.tagline}>A LITTLE SPACE TO SHARE.</Text>
        </View>

        <Pressable onPress={() => router.push("/(authenticated)/(tabs)/profile")}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={s.headerAvatar}
          />
        </Pressable>
      </View>

      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.feed}
        ListHeaderComponent={
          <View>
            <Text style={s.greeting}>GOOD EVENING</Text>
            <Text style={s.heading}>What's happening?</Text>

            <Pressable style={s.composer}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=12" }}
                style={s.composerAvatar}
              />
              <Text style={s.placeholder}>Share your thoughts...</Text>
              <Text style={s.plus}>+</Text>
            </Pressable>

            <View style={s.sectionHeader}>
              <Text style={s.sectionTitle}>Your feed</Text>
              <Text style={s.latest}>LATEST POSTS</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={s.post}>
            <View style={s.postHeader}>
              <Pressable
                style={s.author}
                onPress={() => router.push("/(authenticated)/(tabs)/profile")}
              >
                <Image source={{ uri: item.avatar }} style={s.avatar} />
                <View>
                  <Text style={s.name}>{item.name}</Text>
                  <Text style={s.username}>
                    {item.username} · {item.time}
                  </Text>
                </View>
              </Pressable>
              <Text style={s.more}>•••</Text>
            </View>

            <Text style={s.postText}>{item.text}</Text>

            {item.image && (
              <Image source={{ uri: item.image }} style={s.postImage} />
            )}

            <View style={s.actions}>
              <Pressable style={s.action}>
                <Text style={s.actionIcon}>♡</Text>
                <Text style={s.actionText}>Like</Text>
              </Pressable>
              <Pressable style={s.action}>
                <Text style={s.actionIcon}>○</Text>
                <Text style={s.actionText}>Comment</Text>
              </Pressable>
              <Pressable style={s.action}>
                <Text style={s.actionIcon}>↗</Text>
                <Text style={s.actionText}>Share</Text>
              </Pressable>
            </View>
          </View>
        )}
        ListFooterComponent={
          <Text style={s.end}>YOU'RE ALL CAUGHT UP.</Text>
        }
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F4EE" },
  header: {
    paddingHorizontal: 23,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EAE5DC",
  },
  brand: { fontSize: 27, fontFamily: "Georgia", fontWeight: "bold", color: "#302D29" },
  dot: { color: "#C47B5B" },
  tagline: { fontSize: 8, letterSpacing: 2, color: "#A49A8E", marginTop: 3 },
  headerAvatar: { width: 39, height: 39, borderRadius: 22, borderWidth: 1, borderColor: "#D7C6B3" },
  feed: { paddingHorizontal: 21, paddingBottom: 30 },
  greeting: { fontSize: 9, letterSpacing: 2, color: "#C47B5B", fontWeight: "700", marginTop: 27 },
  heading: { fontFamily: "Georgia", fontSize: 29, color: "#302D29", marginTop: 9, marginBottom: 22 },
  composer: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#EAE5DC", borderRadius: 13, padding: 13, flexDirection: "row", alignItems: "center", gap: 11 },
  composerAvatar: { width: 37, height: 37, borderRadius: 20 },
  placeholder: { flex: 1, color: "#A69C90", fontSize: 12 },
  plus: { fontSize: 23, color: "#C47B5B" },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30, marginBottom: 8 },
  sectionTitle: { fontFamily: "Georgia", fontSize: 21, color: "#302D29" },
  latest: { fontSize: 8, letterSpacing: 1.5, color: "#C47B5B", fontWeight: "800" },
  post: { paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#E7E1D7" },
  postHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  author: { flexDirection: "row", alignItems: "center", gap: 11 },
  avatar: { width: 41, height: 41, borderRadius: 22 },
  name: { fontSize: 13, fontWeight: "700", color: "#35312C" },
  username: { fontSize: 10, color: "#A49B90", marginTop: 4 },
  more: { color: "#A49B90", fontSize: 17 },
  postText: { fontSize: 14, lineHeight: 23, color: "#49443E", marginTop: 15 },
  postImage: { width: "100%", height: 195, borderRadius: 12, marginTop: 13, backgroundColor: "#E9E1D5" },
  actions: { flexDirection: "row", gap: 27, marginTop: 16 },
  action: { flexDirection: "row", alignItems: "center", gap: 6 },
  actionIcon: { color: "#A58A76", fontSize: 17 },
  actionText: { fontSize: 10, color: "#92877B" },
  end: { textAlign: "center", fontSize: 8, letterSpacing: 2, color: "#B0A69A", marginVertical: 28 },
});
