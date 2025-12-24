import {
  Users,
  Smartphone,
  Globe,
  MessageSquare,
  Mail,
  Gift,
  Star,
  TrendingUp,
  Database,
  Heart,
  ShoppingCart,
  Award,
  BarChart3,
  Shield,
  Repeat,
  Bell,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  UserPlus,
  Clock,
  DollarSign,
  MessageCircle,
  Phone,
  Calendar,
  Package,
  CreditCard,
  ThumbsUp,
  Share2,
  AlertCircle,
  Settings,
  Eye,
  Filter,
  Sparkles,
  Brain,
  TrendingDown,
  RotateCcw,
  Send,
  FileText,
  Lock,
  Search,
  MapPin,
  Tag,
  X,
  AlertTriangle,
  Play,
  Pause,
  Calculator,
} from "lucide-react";

export const leadSources = [
  {
    icon: Globe,
    label: "Website & Landing Pages",
    color: "bg-blue-500",
    details: [
      "Form submissions",
      "Chatbot conversations",
      "Popup offers",
      "Newsletter signup",
    ],
    data: ["Name", "Email", "Phone", "Product interest", "Purchase intent"],
    analytics: "Track source, page visited, time on site",
  },
  {
    icon: Smartphone,
    label: "In-Store Walk-Ins",
    color: "bg-green-500",
    details: [
      "QR check-ins",
      "POS sync",
      "Loyalty card signup",
      "Manual entry",
    ],
    data: [
      "Purchase history",
      "Product preferences",
      "Visit frequency",
      "Spending patterns",
    ],
    analytics: "Instant follow-up trigger, visit tracking",
  },
  {
    icon: MessageSquare,
    label: "Social Media DMs & Comments",
    color: "bg-purple-500",
    details: [
      "Instagram DMs",
      "Facebook messages",
      "Comment capture",
      "Ad click-through",
    ],
    data: [
      "Social profile",
      "Interests",
      "Engagement level",
      "Influencer status",
    ],
    analytics: "Automated lead capture from conversations",
  },
  {
    icon: Phone,
    label: "Phone & SMS Inquiries",
    color: "bg-orange-500",
    details: [
      "Inbound calls",
      "Text-to-join",
      "Keyword routing",
      "Appointment requests",
    ],
    data: [
      "Contact info",
      "Inquiry type",
      "Urgency level",
      "Product questions",
    ],
    analytics: "Integrated number capture, auto-response",
  },
  {
    icon: Users,
    label: "Referrals & Loyalty Links",
    color: "bg-pink-500",
    details: [
      "Customer referrals",
      "Partner networks",
      "Influencer codes",
      "Affiliate tracking",
    ],
    data: [
      "Referral source",
      "Incentive tracking",
      "Network mapping",
      "Commission data",
    ],
    analytics: "Track source and reward instantly",
  },
  {
    icon: Calendar,
    label: "Events & Popups",
    color: "bg-yellow-500",
    details: [
      "QR/NFC instant opt-ins",
      "Event registration",
      "Tasting sessions",
      "Store launches",
    ],
    data: [
      "Event attendance",
      "Product interest",
      "Engagement level",
      "Follow-up preference",
    ],
    analytics: "Real-time capture, immediate nurture start",
  },
];

export const currentStatePains = [
  { issue: "Leads lost in spreadsheets", impact: "70%", icon: AlertTriangle },
  { issue: "Manual texting time", impact: "15+ hrs/week", icon: Clock },
  { issue: "No follow-up consistency", impact: "0%", icon: TrendingDown },
  { issue: "Zero purchase prediction", impact: "$0 recovered", icon: X },
];

export const afterPuffPro = [
  { solution: "Lead capture rate", impact: "100%", icon: CheckCircle },
  { solution: "Manual outreach time", impact: "0 hours", icon: Zap },
  { solution: "Automated workflows", impact: "6 active", icon: Repeat },
  { solution: "Prediction accuracy", impact: "90%+", icon: Brain },
];

export const urgencyMetrics = [
  { label: "Leads captured manually", value: "23/day", loss: "Error-prone" },
  {
    label: "Lost in missed follow-ups",
    value: "$487/day",
    loss: "Pure revenue loss",
  },
  {
    label: "Time on repetitive tasks",
    value: "14 hrs/week",
    loss: "Wasted labor",
  },
  {
    label: "Lost potential regulars",
    value: "3.2/day",
    loss: "Lifetime value gone",
  },
];

export const processingSteps = [
  {
    icon: Database,
    title: "Auto-Capture & CRM Sync",
    items: [
      "Contact information",
      "Source tracking",
      "Timestamp & location",
      "Device info",
    ],
    color: "text-blue-400",
    time: "< 5 sec",
  },
  {
    icon: Shield,
    title: "Age Verification & Tagging",
    items: [
      "DOB validation",
      "ID check (if required)",
      "Compliance logging",
      "Legal documentation",
    ],
    color: "text-green-400",
    time: "< 10 sec",
  },
  {
    icon: Tag,
    title: "AI Lead Scoring",
    items: [
      "Hot/Warm/Cold classification",
      "Interest category",
      "Purchase intent",
      "Behavior prediction",
    ],
    color: "text-purple-400",
    time: "< 15 sec",
  },
  {
    icon: Brain,
    title: "Smart Segmentation",
    items: [
      "Auto-assign to workflows",
      "Predict preferences",
      "Calculate LTV",
      "Route to best sequence",
    ],
    color: "text-cyan-400",
    time: "< 20 sec",
  },
];

export const workflows = [
  {
    id: "welcome",
    title: "Welcome & Onboarding",
    icon: Gift,
    gradient: "from-blue-500 to-blue-600",
    trigger: "New lead enters system",
    duration: "3 days",
    coreBenefit: "Converts cold leads into first-time buyers",
    conversionRate: "35-45%",
    timeline: [
      {
        time: "< 1 minute",
        action: "Instant Welcome SMS",
        details:
          "Personalized greeting with shop name, thank you message, 10-15% first-time discount code with expiry",
        trigger: "Lead captured",
        benefits: [
          "Immediate engagement",
          "First impression",
          "Discount incentive",
        ],
      },
      {
        time: "15 minutes",
        action: "Welcome Email",
        details:
          "Brand story, product categories, store location/hours, loyalty program overview, social proof",
        trigger: "SMS delivered",
        benefits: ["Brand education", "Set expectations", "Trust building"],
      },
      {
        time: "2 hours",
        action: "Product Education",
        details:
          "Beginner guides, popular products, flavor profiles, device tutorials, safety info",
        trigger: "Email opened",
        benefits: [
          "Customer education",
          "Reduced confusion",
          "Purchase confidence",
        ],
      },
      {
        time: "24 hours",
        action: "AI Product Recommendations",
        details:
          "Based on initial preferences, browsing behavior, similar customer patterns, location trends",
        trigger: "Engagement detected",
        benefits: [
          "Personalization",
          "Relevant suggestions",
          "Higher conversion",
        ],
      },
      {
        time: "3 days",
        action: "First Purchase Incentive",
        details:
          "Limited-time offer reminder (48hr countdown), free shipping/sample, bundle deals, urgency messaging",
        trigger: "No purchase yet",
        benefits: [
          "Urgency creation",
          "Purchase motivation",
          "Revenue acceleration",
        ],
      },
    ],
    failureHandling: {
      noResponse: "Move to nurture sequence after 5 days",
      optOut: "Remove from SMS, continue email only",
      purchased: "Jump to purchase optimization workflow",
    },
    outcomes: {
      revenue: "Convert 35-45% of new leads within 7 days",
      experience: "Smooth onboarding, clear expectations",
      data: "Engagement tracking, preference learning",
      timeToFirstPurchase: "4.2 days avg (vs 14 days industry)",
    },
  },
  {
    id: "nurture",
    title: "Education & Nurture",
    icon: Mail,
    gradient: "from-purple-500 to-purple-600",
    trigger: "Leads who have not purchased yet or need engagement",
    duration: "Ongoing",
    coreBenefit: "Educates new leads, builds brand trust",
    conversionRate: "12-18%",
    timeline: [
      {
        time: "Weekly",
        action: "Educational Content Series",
        details:
          "Vaping 101, device maintenance, flavor pairing, industry news, safety tips, myth-busting",
        trigger: "Scheduled + engagement-based",
        benefits: ["Establish authority", "Build trust", "Position as expert"],
      },
      {
        time: "Bi-weekly",
        action: "Curated Product Spotlights",
        details:
          "New arrivals, bestsellers, seasonal favorites, customer reviews, video demos",
        trigger: "Product interest tags",
        benefits: ["Product awareness", "Social proof", "Purchase inspiration"],
      },
      {
        time: "Monthly",
        action: "Exclusive Member Content",
        details:
          "Behind-the-scenes, early access offers, VIP tips, community highlights, insider deals",
        trigger: "Engagement milestone",
        benefits: [
          "Exclusivity feeling",
          "Community belonging",
          "Loyalty building",
        ],
      },
      {
        time: "Event-based",
        action: "Interactive Engagement",
        details:
          "Polls, surveys, contests, user-generated content requests, feedback loops, Q&A sessions",
        trigger: "Low engagement alert",
        benefits: ["Two-way communication", "Data collection", "Re-engagement"],
      },
    ],
    failureHandling: {
      noEngagement: "Reduce frequency to monthly after 60 days",
      multipleOpens: "Increase to 2x weekly with purchase prompts",
      optOut: "Archive to cold list, quarterly check-in only",
    },
    outcomes: {
      revenue: "Stay top-of-mind for future purchases",
      experience: "Educated, informed customers",
      data: "Preference tracking, engagement scoring",
      conversion: "12-18% eventually convert to customers",
    },
  },
  {
    id: "purchase",
    title: "Purchase Optimization",
    icon: ShoppingCart,
    gradient: "from-green-500 to-green-600",
    trigger: "Customer has made at least one purchase",
    duration: "Post-purchase",
    coreBenefit: "Predicts restocks and automates reminders",
    conversionRate: "60-75%",
    timeline: [
      {
        time: "Immediately",
        action: "Purchase Confirmation",
        details:
          "Order details, digital receipt, loyalty points earned, expected usage timeline, next steps",
        trigger: "Transaction complete",
        benefits: [
          "Order confidence",
          "Clear communication",
          "Points awareness",
        ],
      },
      {
        time: "3 days later",
        action: "Product Usage Tips",
        details:
          "How-to guides, maintenance tips, troubleshooting FAQ, maximize enjoyment, care instructions",
        trigger: "Post-purchase window",
        benefits: ["Enhanced experience", "Reduce returns", "Customer success"],
      },
      {
        time: "1-2 weeks",
        action: "Cross-sell Recommendations",
        details:
          "Complementary products, accessories, flavor varieties based on purchase, bundle suggestions",
        trigger: "Product familiarity established",
        benefits: ["Increased AOV", "Product discovery", "Enhanced experience"],
      },
      {
        time: "2-3 weeks",
        action: "AI Restock Prediction Alert",
        details:
          "AI calculates when customer likely running low based on product type and usage patterns, timely reminder with easy reorder button",
        trigger: "Usage algorithm",
        benefits: ["Perfect timing", "Convenience", "Predictable revenue"],
      },
      {
        time: "Before depletion",
        action: "Automated Reorder Prompt",
        details:
          "One-click reorder, subscription option (save 15%), bundle discount, new flavor suggestion, VIP early access",
        trigger: "Predicted depletion - 3 days",
        benefits: [
          "Frictionless purchase",
          "Subscription revenue",
          "Upsell opportunity",
        ],
      },
    ],
    failureHandling: {
      noReorder: "Escalate discount offer after 5 days",
      subscription: "Auto-ship at predicted intervals",
      productIssue: "Alert support team immediately",
    },
    outcomes: {
      revenue: "40-60% increase in repeat purchase rate",
      experience: "Convenient, timely, helpful",
      data: "Purchase cycle mapping, preference refinement",
      repeatCycle: "18-22 days average between purchases",
    },
  },
  {
    id: "loyalty",
    title: "Loyalty & VIP Program",
    icon: Award,
    gradient: "from-yellow-500 to-yellow-600",
    trigger: "All customers automatically enrolled",
    duration: "Continuous",
    coreBenefit: "Builds repeat buyers through points & rewards",
    conversionRate: "65%",
    timeline: [
      {
        time: "Real-time",
        action: "Points Accumulation",
        details:
          "Earn 1 point per $1 spent, bonus point events (2x weekends), referral rewards (500 pts), review bonuses (100 pts)",
        trigger: "Every transaction",
        benefits: ["Gamification", "Repeat motivation", "Engagement driver"],
      },
      {
        time: "Milestone-based",
        action: "Tier Progression",
        details:
          "Bronze (0-499) → Silver (500-999) → Gold (1000-2499) → Platinum (2500+), escalating benefits per tier",
        trigger: "Points threshold",
        benefits: [
          "Status achievement",
          "Increased spending",
          "Retention boost",
        ],
      },
      {
        time: "Monthly",
        action: "Points Balance Update",
        details:
          "Current points, next reward threshold, exclusive tier offers, expiration warnings (90 days), redemption ideas",
        trigger: "Monthly schedule",
        benefits: ["Transparency", "Urgency creation", "Redemption motivation"],
      },
      {
        time: "Quarterly",
        action: "VIP Exclusive Events",
        details:
          "Early product access, private tastings, special discounts (25%+ off), community meetups, swag boxes",
        trigger: "Gold+ tier only",
        benefits: ["Exclusivity", "Community building", "Brand advocacy"],
      },
      {
        time: "Birthday/Anniversary",
        action: "Special Celebration Rewards",
        details:
          "Birthday: 2x points for 7 days + free gift. Anniversary: bonus based on total spent, surprise upgrade",
        trigger: "Date-based",
        benefits: [
          "Personal touch",
          "Emotional connection",
          "Guaranteed engagement",
        ],
      },
    ],
    failureHandling: {
      pointsExpiring: "Alert 30 days before, offer easy redemption",
      lowEngagement: "Special bonus point offer to re-activate",
      tierDowngrade: "Grace period + reactivation campaign",
    },
    outcomes: {
      revenue: "65% enrolled customers spend 2.5x more",
      experience: "Rewarded, valued, appreciated",
      regulars: "78% of tier 2+ become monthly visitors",
      loyalty: "Average customer lifetime increases 156%",
    },
  },
  {
    id: "winback",
    title: "Re-engagement & Win-Back",
    icon: Heart,
    gradient: "from-red-500 to-red-600",
    trigger: "Customer shows declining engagement or inactivity",
    duration: "30+ days",
    coreBenefit: "Reconnects lapsed customers automatically",
    conversionRate: "25-35%",
    timeline: [
      {
        time: "15 days inactive",
        action: "Gentle Check-In",
        details:
          'Friendly "we miss you" message, highlight new products since last visit, ask if everything okay, no pressure',
        trigger: "No interaction 15 days",
        benefits: ["Non-pushy", "Shows care", "Opens dialogue"],
      },
      {
        time: "30 days inactive",
        action: "Incentive Offer (15% off)",
        details:
          "15% comeback discount, double points on next purchase, free sample with order, valid 7 days",
        trigger: "No response to check-in",
        benefits: [
          "Financial motivation",
          "Low barrier return",
          "Value demonstration",
        ],
      },
      {
        time: "45 days inactive",
        action: "Personalized Outreach (25% off)",
        details:
          "Based on past preferences and favorites, survey to understand why inactive, special bundle of previous purchases",
        trigger: "Still no engagement",
        benefits: ["Shows attention", "Gathers feedback", "Targeted approach"],
      },
      {
        time: "60 days inactive",
        action: "Last Chance Campaign (30% off)",
        details:
          "30% off + bonus gift, exclusive access to new products, no-risk 30-day satisfaction guarantee, final offer messaging",
        trigger: "Critical churn risk",
        benefits: ["Maximum incentive", "Urgency", "Final effort"],
      },
      {
        time: "90+ days",
        action: "Sunset Sequence",
        details:
          'Archive to inactive list, quarterly "we\'re here if you need us" message, special comeback events only',
        trigger: "Confirmed churned",
        benefits: ["Clean database", "Cost savings", "Leave door open"],
      },
    ],
    failureHandling: {
      reactivated: "Move back to purchase optimization",
      optOut: "Remove completely, note reason",
      complaint: "Route to support, special VIP recovery",
    },
    outcomes: {
      revenue: "Recover 25-35% of lapsed customers",
      experience: "Feel valued even when absent",
      data: "Churn reasons, reactivation triggers identified",
      recovered: "18% avg reactivation rate across all tiers",
    },
  },
  {
    id: "review",
    title: "Reviews & Social Proof",
    icon: Star,
    gradient: "from-pink-500 to-pink-600",
    trigger: "Post-purchase, positive interactions",
    duration: "2 days post-purchase",
    coreBenefit: "Boosts store rating & social credibility",
    conversionRate: "34%",
    timeline: [
      {
        time: "3 days after purchase",
        action: "Satisfaction Check",
        details:
          'Quick 1-5 star rating via SMS, "How was your experience?", identify issues early, route based on response',
        trigger: "3 days post-delivery",
        benefits: ["Immediate feedback", "Catch problems", "Show care"],
      },
      {
        time: "1 week after purchase (5★ only)",
        action: "Public Review Request",
        details:
          "Google/Facebook review link, make it easy (one-click), explain impact on local business, template provided",
        trigger: "5-star internal rating",
        benefits: ["Social proof", "SEO benefit", "Reputation building"],
      },
      {
        time: "For 5-star ratings",
        action: "Review Incentive & Sharing",
        details:
          "100 bonus loyalty points for public reviews, feature customer on social media, personal thank you from owner",
        trigger: "Public review posted",
        benefits: [
          "Incentivized advocacy",
          "Content generation",
          "Trust signals",
        ],
      },
      {
        time: "For 1-3 star ratings",
        action: "Private Resolution Path",
        details:
          "Immediate alert to owner/manager, personal outreach within 4 hours, resolution offer (refund/replacement), follow-up check",
        trigger: "Low rating detected",
        benefits: [
          "Problem resolution",
          "Prevent public negativity",
          "Recovery opportunity",
        ],
      },
      {
        time: "Ongoing",
        action: "User-Generated Content",
        details:
          "Encourage photos/videos of products, monthly photo contest, feature customers in stories, community gallery",
        trigger: "Engagement-based",
        benefits: ["Free marketing", "Authenticity", "Community engagement"],
      },
    ],
    failureHandling: {
      negativeReview: "Immediate owner alert + resolution protocol",
      noResponse: "One more gentle ask after 5 days",
      multipleReviews: "Thank and amplify across channels",
    },
    outcomes: {
      review: "4.7+ star average across all platforms",
      experience: "Voice heard, feedback valued",
      data: "Sentiment analysis, improvement insights",
      volume: "+320% review volume vs pre-automation",
    },
  },
];

export const businessOutcomes = [
  {
    category: "Revenue Growth",
    icon: DollarSign,
    color: "text-green-400",
    metrics: [
      {
        label: "Overall Revenue Increase",
        value: "20-40%",
        timeline: "Within 90 days",
        proof: "Proven through repeat automation",
      },
      {
        label: "Average Order Value",
        value: "+28%",
        timeline: "Via AI cross-sells",
        proof: "Smart bundling & upsells",
      },
      {
        label: "Purchase Frequency",
        value: "+45%",
        timeline: "Automated reminders",
        proof: "Restock prediction system",
      },
      {
        label: "Customer Lifetime Value",
        value: "+156%",
        timeline: "Retention & loyalty",
        proof: "Loyalty program impact",
      },
      {
        label: "Lead-to-Customer Conversion",
        value: "42%",
        timeline: "vs 12% industry avg",
        proof: "Automated nurture sequences",
      },
    ],
  },
  {
    category: "Customer Experience",
    icon: Heart,
    color: "text-pink-400",
    metrics: [
      {
        label: "Onboarding Satisfaction",
        value: "4.8/5",
        timeline: "Welcome sequence",
        proof: "Post-onboarding surveys",
      },
      {
        label: "Response Time",
        value: "< 1 min",
        timeline: "Automated replies",
        proof: "Instant acknowledgment",
      },
      {
        label: "Personalization Score",
        value: "92%",
        timeline: "AI-driven",
        proof: "Behavioral targeting",
      },
      {
        label: "Friction Reduction",
        value: "65%",
        timeline: "Streamlined flows",
        proof: "One-click actions",
      },
      {
        label: "Time-to-First-Purchase",
        value: "4.2 days",
        timeline: "vs 14 days industry",
        proof: "Aggressive welcome offers",
      },
    ],
  },
  {
    category: "Repeat Customers",
    icon: Repeat,
    color: "text-blue-400",
    metrics: [
      {
        label: "Repeat Purchase Rate",
        value: "38% → 68%",
        timeline: "Automation impact",
        proof: "Before/after tracking",
      },
      {
        label: "Visit Frequency",
        value: "2.5x",
        timeline: "Loyalty members",
        proof: "Points-driven visits",
      },
      {
        label: "Monthly Active Rate",
        value: "+85%",
        timeline: "Engagement campaigns",
        proof: "Regular touchpoints",
      },
      {
        label: "Churn Reduction",
        value: "-42%",
        timeline: "Win-back sequences",
        proof: "Reactivation success",
      },
      {
        label: "Avg Purchase Cycle",
        value: "18-22 days",
        timeline: "Predicted & triggered",
        proof: "AI timing optimization",
      },
    ],
  },
  {
    category: "Reviews & Reputation",
    icon: Star,
    color: "text-yellow-400",
    metrics: [
      {
        label: "Average Rating",
        value: "4.7+",
        timeline: "Across all platforms",
        proof: "Google, Facebook, Yelp",
      },
      {
        label: "Review Volume",
        value: "+320%",
        timeline: "Automated requests",
        proof: "Systematic collection",
      },
      {
        label: "Positive Sentiment",
        value: "89%",
        timeline: "AI sentiment analysis",
        proof: "Text analysis tools",
      },
      {
        label: "Issue Resolution Rate",
        value: "94%",
        timeline: "Negative feedback",
        proof: "Fast response protocol",
      },
      {
        label: "Review Conversion",
        value: "34%",
        timeline: "Of satisfied customers",
        proof: "Incentivized asking",
      },
    ],
  },
  {
    category: "Data & Insights",
    icon: Database,
    color: "text-purple-400",
    metrics: [
      {
        label: "Data Capture Rate",
        value: "100%",
        timeline: "Every interaction",
        proof: "No manual entry needed",
      },
      {
        label: "Customer Profile Completeness",
        value: "360°",
        timeline: "Full view",
        proof: "Multi-source integration",
      },
      {
        label: "Behavior Tracking",
        value: "Real-time",
        timeline: "All touchpoints",
        proof: "Live dashboard updates",
      },
      {
        label: "Predictive Accuracy",
        value: "90%+",
        timeline: "AI-powered forecasting",
        proof: "Churn & LTV predictions",
      },
      {
        label: "Campaign Attribution",
        value: "100%",
        timeline: "Source to sale",
        proof: "Full funnel tracking",
      },
    ],
  },
  {
    category: "Loyalty & Advocacy",
    icon: Award,
    color: "text-orange-400",
    metrics: [
      {
        label: "Program Enrollment",
        value: "65%",
        timeline: "Auto-enrollment",
        proof: "Opt-in rate",
      },
      {
        label: "Active Participation",
        value: "78%",
        timeline: "Regular engagement",
        proof: "Points usage tracking",
      },
      {
        label: "Referral Rate",
        value: "23%",
        timeline: "Of active members",
        proof: "Word-of-mouth growth",
      },
      {
        label: "VIP Retention",
        value: "95%",
        timeline: "Top tier customers",
        proof: "Platinum/Gold loyalty",
      },
      {
        label: "LTV Increase (Members)",
        value: "+156%",
        timeline: "vs non-members",
        proof: "Cohort analysis",
      },
    ],
  },
];

export const aiFeatures = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    subtitle: "Your crystal ball for customer behavior",
    capabilities: [
      {
        name: "Churn Risk Prediction",
        accuracy: "90%",
        detail: "Identifies at-risk customers 30 days early",
      },
      {
        name: "Next Purchase Timing",
        accuracy: "87%",
        detail: "Forecasts when customer will buy again",
      },
      {
        name: "Lifetime Value Calculation",
        accuracy: "85%",
        detail: "Predicts total customer worth",
      },
      {
        name: "Product Affinity Mapping",
        accuracy: "92%",
        detail: "Knows what customer will love next",
      },
    ],
  },
  {
    icon: Target,
    title: "Smart Segmentation",
    subtitle: "Automatic customer categorization",
    capabilities: [
      {
        name: "Behavioral Clustering",
        accuracy: "Real-time",
        detail: "Groups customers by actions",
      },
      {
        name: "RFM Analysis",
        accuracy: "Daily updates",
        detail: "Recency, Frequency, Monetary scoring",
      },
      {
        name: "Dynamic Segments",
        accuracy: "Auto-updating",
        detail: "Segments evolve with behavior",
      },
      {
        name: "Micro-targeting",
        accuracy: "Individual-level",
        detail: "Personalized 1-to-1 campaigns",
      },
    ],
  },
  {
    icon: Sparkles,
    title: "Personalization Engine",
    subtitle: "Every message feels hand-crafted",
    capabilities: [
      {
        name: "Product Recommendations",
        accuracy: "89%",
        detail: "AI-powered suggestions per customer",
      },
      {
        name: "Dynamic Content",
        accuracy: "Real-time",
        detail: "Messages adapt to preferences",
      },
      {
        name: "Send Time Optimization",
        accuracy: "91%",
        detail: "Delivers at best engagement time",
      },
      {
        name: "Offer Optimization",
        accuracy: "88%",
        detail: "Right discount for right person",
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    subtitle: "ROI tracking on every dollar spent",
    capabilities: [
      {
        name: "Campaign ROI Tracking",
        accuracy: "Dollar-level",
        detail: "Revenue attribution per campaign",
      },
      {
        name: "Attribution Modeling",
        accuracy: "Multi-touch",
        detail: "Credit all touchpoints",
      },
      {
        name: "Journey Analytics",
        accuracy: "Path-level",
        detail: "See complete customer journey",
      },
      {
        name: "Revenue Forecasting",
        accuracy: "86%",
        detail: "Predict next month revenue",
      },
    ],
  },
];

export const integrations = [
  { name: "Square POS", icon: CreditCard, status: "Native" },
  { name: "Clover POS", icon: CreditCard, status: "Native" },
  { name: "Shopify", icon: ShoppingCart, status: "API" },
  { name: "Facebook/Instagram", icon: MessageSquare, status: "Integrated" },
  { name: "Google My Business", icon: Star, status: "Integrated" },
  { name: "Twilio SMS", icon: Phone, status: "Powered by" },
];
