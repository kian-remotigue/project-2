
import { router } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DETAILS = [
  { label: "EMAIL ADDRESS", value: "kianremotigue@gmail.com" },
  { label: "PHONE NUMBER", value: "+63 912 345 6789" },
  { label: "LOCATION", value: "Opol, Misamis Oriental, Philippines" },
  { label: "MEMBER SINCE", value: "November 2026" },
];

export default function Profile() {
  return (
    <SafeAreaView style={s.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={s.header}>
          <Text style={s.brand}>moment<Text style={s.dot}>.</Text></Text>
          <Text style={s.headerLabel}>MY PROFILE</Text>
        </View>

        <View style={s.profile}>
          <View style={s.avatarBorder}>
            <Image
              source={{ uri: "https://i.pravatar.cc/300?img=12" }}
              style={s.avatar}
            />
          </View>

          <Text style={s.name}>Kian_Dumps</Text>
          <Text style={s.username}>@kianremotigue</Text>

          <Text style={s.bio}>
            Sharing thoughts, little moments, and everything in between.
          </Text>

          <Pressable style={s.editButton}>
            <Text style={s.editText}>Edit Profile</Text>
          </Pressable>
        </View>

        <View style={s.stats}>
          <View style={s.stat}>
            <Text style={s.statNumber}>12</Text>
            <Text style={s.statLabel}>POSTS</Text>
          </View>
          <View style={s.statDivider} />
          <View style={s.stat}>
            <Text style={s.statNumber}>1.6M</Text>
            <Text style={s.statLabel}>FOLLOWERS</Text>
          </View>
          <View style={s.statDivider} />
          <View style={s.stat}>
            <Text style={s.statNumber}>85</Text>
            <Text style={s.statLabel}>FOLLOWING</Text>
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Personal Details</Text>

          {DETAILS.map((item, index) => (
            <View key={item.label} style={s.detail}>
              <View style={s.detailNumber}>
                <Text style={s.number}>{`0${index + 1}`}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.label}>{item.label}</Text>
                <Text style={s.value}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <Pressable
          style={s.logout}
          onPress={() => router.replace("/(unauthenticated)/login")}
        >
          <Text style={s.logoutText}>Log Out</Text>
          <Text style={s.logoutArrow}>↗</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F4EE" },
  content: { paddingHorizontal: 23, paddingBottom: 35 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15 },
  brand: { fontSize: 27, fontFamily: "Georgia", fontWeight: "bold", color: "#302D29" },
  dot: { color: "#C47B5B" },
  headerLabel: { fontSize: 9, letterSpacing: 2, color: "#A49A8E" },
  profile: { alignItems: "center", marginTop: 27, paddingBottom: 27 },
  avatarBorder: { borderWidth: 1, borderColor: "#C47B5B", borderRadius: 65, padding: 5 },
  avatar: { width: 112, height: 112, borderRadius: 60 },
  name: { fontFamily: "Georgia", fontSize: 27, color: "#302D29", marginTop: 19 },
  username: { color: "#C47B5B", fontSize: 12, marginTop: 5 },
  bio: { color: "#92877B", fontSize: 12, textAlign: "center", lineHeight: 21, marginTop: 13, maxWidth: 260 },
  editButton: { borderWidth: 1, borderColor: "#D4C7B7", borderRadius: 10, paddingVertical: 11, paddingHorizontal: 30, marginTop: 19 },
  editText: { color: "#302D29", fontSize: 12, fontWeight: "700" },
  stats: { flexDirection: "row", backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#EAE5DC", borderRadius: 13, paddingVertical: 17, justifyContent: "space-around", alignItems: "center" },
  stat: { alignItems: "center", flex: 1 },
  statNumber: { fontFamily: "Georgia", fontSize: 23, color: "#302D29" },
  statLabel: { fontSize: 8, letterSpacing: 1, color: "#A49A8E", marginTop: 5 },
  statDivider: { width: 1, height: 31, backgroundColor: "#EAE5DC" },
  section: { marginTop: 33 },
  sectionTitle: { fontFamily: "Georgia", fontSize: 21, color: "#302D29", marginBottom: 13 },
  detail: { flexDirection: "row", alignItems: "center", gap: 13, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: "#E7E1D7" },
  detailNumber: { width: 34, height: 34, borderRadius: 10, backgroundColor: "#F0E8DE", justifyContent: "center", alignItems: "center" },
  number: { fontSize: 10, color: "#C47B5B", fontWeight: "800" },
  label: { fontSize: 8, letterSpacing: 1.5, color: "#A49A8E", fontWeight: "700" },
  value: { fontSize: 14, color: "#39342D", marginTop: 5 },
  logout: { backgroundColor: "#EFE4DC", padding: 16, borderRadius: 11, marginTop: 30, flexDirection: "row", justifyContent: "space-between" },
  logoutText: { color: "#B35F49", fontSize: 12, fontWeight: "700" },
  logoutArrow: { color: "#B35F49", fontSize: 16 },
});
